// BAD
// interface Character {
//     shoot(): void;
//     swim(): void;
//     talk(): void;
//     dance(): void;
// }

// class Troll implements Character {
//     public shoot(): void {}
//     public swim(): void {}
//     public talk(): void {}
//     public dance(): void {}
// }

interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Troll implements Shooter, Dancer {
  shoot(): void {}
  dance(): void {}
}
