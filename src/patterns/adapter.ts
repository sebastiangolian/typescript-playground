interface NewAppInterface {
    request(): string
}

class Target implements NewAppInterface {
    request(): string {
        return 'New App request';
    }
}

class OldAppClass {
    specificRequest(): { code: number, body: string } {
        return { code: 123, body: "Old App request" };
    }
}

class Adapter extends Target implements NewAppInterface {
    private adaptee: OldAppClass;

    constructor(adaptee: OldAppClass) {
        super();
        this.adaptee = adaptee;
    }

    request(): string {
        const oldRequestResult = this.adaptee.specificRequest();
        return `Adapter: (TRANSLATED) ${oldRequestResult.body}`;
    }
}

function newAppMethod(target: Target) {
    console.log(target.request());
}

export function adapterRun(): void {
    newAppMethod(new Target());
    ///newAppMethod(new OldAppClass());             //BAD
    newAppMethod(new Adapter(new OldAppClass()));
}

