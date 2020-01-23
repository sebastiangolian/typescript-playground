export class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return this.firstname + " " + this.lastname;
    }
    log() {
        console.log("Firstname is  :   " + this.firstname);
        console.log("Lastname is  :   " + this.lastname);
    }
}
