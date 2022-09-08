import { User } from "./classes/User.js";
const user = new User("Jan", "Kowal3");
const user2 = new User("Jan", "Kowal12");
const test = document.getElementById("test");
test.innerHTML += user.getFullName() + "<br />";
test.innerHTML += user2.getFullName();
