
interface Command { execute(): void; }


class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`SimpleCommand.execute (${this.payload})`);
    }
}


class ComplexCommand implements Command {
    private receiver: Receiver;
    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        console.log('ComplexCommand.execute');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver (${a})`);
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver (${b})`);
    }
}

class Invoker {
    private onStart!: Command;
    private onAfterStart!: Command;
    private onFinish!: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setAfterStart(command: Command): void {
        this.onAfterStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }


    public doSomethingImportant(): void {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        if (this.isCommand(this.onAfterStart)) {
            this.onAfterStart.execute();
        }

        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object: any): object is Command {
        if(!object) {
            return false
        }
        return object.execute !== undefined;
    }
}

export function commandRun(): void {
    const invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand('job 1'));
    invoker.setAfterStart(new SimpleCommand('job 2'));
    invoker.setOnFinish(new ComplexCommand(new Receiver(), 'Send email', 'Save report'));
    invoker.doSomethingImportant();
}