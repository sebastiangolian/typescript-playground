// BAD
// class FrontendDeveloper {
//     public writeHtmlCode(): void { }
// }

// class BackendDeveloper {
//     public writeTypeScriptCode(): void { }
// }

// class SoftwareProject {
//     public frontendDeveloper: FrontendDeveloper;
//     public backendDeveloper: BackendDeveloper;

//     constructor() {
//         this.frontendDeveloper = new FrontendDeveloper();
//         this.backendDeveloper = new BackendDeveloper();
//     }

//     public createProject(): void {
//         this.frontendDeveloper.writeHtmlCode();
//         this.backendDeveloper.writeTypeScriptCode();
//     }
// }

interface Developer {
    develop(): void;
}

class FrontendDeveloper implements Developer {
    develop(): void {
        this.writeHtmlCode();
    }

    private writeHtmlCode(): void { }
}

class BackendDeveloper implements Developer {
    develop(): void {
        this.writeTypeScriptCode();
    }

    private writeTypeScriptCode(): void { }
}

class SoftwareProject {
    private developers: Developer[] = [];

    createProject(): void {
        this.developers.forEach((developer: Developer) => {
            developer.develop();
        });
    }
}