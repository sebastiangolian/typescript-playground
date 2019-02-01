export class User {
    firstname:string;
    lastname:string;
 
    constructor(firstname:string, lastname: string) {
       this.firstname = firstname
       this.lastname = lastname
    }

    getFullName():string {
       return this.firstname + " " + this.lastname;
    }
 
    log(): void {
       console.log("firstname is  :   " + this.firstname)
       console.log("lastname is  :   " + this.lastname)
    }
 }