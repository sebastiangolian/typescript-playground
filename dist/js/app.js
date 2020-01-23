import { User } from "./classes/User.js";
let user = new User("Jan", "Kowal");
const test = document.getElementById("test");
test.innerHTML += user.getFullName();
