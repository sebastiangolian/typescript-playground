import { User } from "./classes/User.js";
let user = new User("Jan","Kowalski");
const test = document.getElementById("test") as HTMLElement;
test.innerHTML += user.getFullName();