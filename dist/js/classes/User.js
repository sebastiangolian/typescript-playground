export class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return this.firstname + " " + this.lastname;
    }
    log() {
        console.log("firstname is  :   " + this.firstname);
        console.log("lastname is  :   " + this.lastname);
    }
}
