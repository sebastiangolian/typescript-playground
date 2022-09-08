export class Print {
    private httpElement: HTMLElement;

    constructor(space: string) {
        this.httpElement = document.getElementById(space) as HTMLElement;
    }

    log(txt: any) {
        console.log('test')
        this.httpElement.innerHTML += `${JSON.stringify(txt)}<br />`;
    }
}