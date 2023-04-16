class Singleton {
  private static instance: Singleton;

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  toString() {
    return "Singleton";
  }
}

export function singletonRun(): void {
  console.log(Singleton.getInstance().toString());
}
