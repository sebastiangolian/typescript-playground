class Chatroom {
  private users: { [index: string]: User } = {};

  register(user: User): void {
    const username = user.getUsername();
    user.setChatroom(this)
    this.users[username] = user;
  }

  send(message: string, from: User, to: User|null = null): void {
    if (to) {
      to.receive(message, from);
    } else {
        Object.keys(this.users).forEach(key => {
            if(this.users[key] != from) {
                this.users[key].receive(message, from)
            }
        })
    }
  }
}

class User {
  private chatroom: Chatroom | null = null;
  private username: string;
  constructor(username: string) {
    this.username = username;
  }

  setChatroom(chatroom: Chatroom): void {
    this.chatroom = chatroom;
  }

  getUsername(): string {
    return this.username;
  }

  send(message: string, to: User | null = null): void {
    this.chatroom?.send(message, this, to)
  }

  receive(message: string, from: User | null = null): void {
    console.log(from?.getUsername() + " to " + this.getUsername() + ": " + message);
  }
}

export function testMediator() {
  const user1 = new User("John");
  const user2 = new User("Maria");
  const user3 = new User("Michael");

  const chatroom = new Chatroom();
  chatroom.register(user1);
  chatroom.register(user2);
  chatroom.register(user3);

  user1.send("All you need is love.");
  user2.send("I love you John.");
  user2.send("Hey, no need to broadcast", user1);
  user3.send("Ha, I heard that!");
  user2.send("Paul, what do you think?", user3);
}
