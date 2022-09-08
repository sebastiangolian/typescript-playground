export class Print {
    private httpElement: HTMLElement | null;

    constructor(space: string) {
        if (typeof document !== 'undefined') {
            this.httpElement = document.getElementById(space) as HTMLElement;
        } else {
            this.httpElement = null
        }
    }

    log(txt: any) {
        if (this.httpElement) {
            this.httpElement.innerHTML += `${JSON.stringify(txt)}<br />`;
        } else {
            console.log(txt)
        }
    }
}