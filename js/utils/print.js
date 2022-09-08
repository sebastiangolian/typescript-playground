export class Print {
    constructor(space) {
        this.httpElement = document.getElementById(space);
    }
    log(txt) {
        console.log('test');
        this.httpElement.innerHTML += `${JSON.stringify(txt)}<br />`;
    }
}
