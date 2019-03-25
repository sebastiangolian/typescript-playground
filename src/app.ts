import { User } from "./classes/User.js";
let user = new User("Sebastian","Golian");
const test = document.getElementById("test") as HTMLElement;
test.innerHTML += user.getFullName();