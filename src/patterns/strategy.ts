interface SendingStrategy {
    send(message: string): void
}

class MailSender implements SendingStrategy {
    send(message: string): void {
        console.log(`send message ${message} by mail`)
    }
}

class PushNotificationSender implements SendingStrategy {
    send(message: string): void {
        console.log(`send message ${message} by push notification`)
    }
}

class MessageSender {
    private sendingStrategy: SendingStrategy | null = null
    constructor() {}

    setStrategy(strategy: SendingStrategy): void {
        this.sendingStrategy = strategy;
    }

    sendMessage(message: string): void {
        this.sendingStrategy?.send(message);
    }
}

export function testStrategy(): void {
    const messageSender = new MessageSender()
    messageSender.setStrategy(new MailSender())
    messageSender.sendMessage("Hello world")

    messageSender.setStrategy(new PushNotificationSender())
    messageSender.sendMessage("Hello world")
}