export class Print {
    
    constructor(space) {
        this.httpElement = document.getElementById(space);
    }

    log(txt) {
        this.httpElement.innerHTML += `${JSON.stringify(txt)}<br />`;
    }
}
