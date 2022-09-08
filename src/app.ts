import { indexedArray } from "./classes/array-index.js";
import { User } from "./classes/user.js";
import { Print } from "./utils/print.js";

const print = new Print("test");
const user = new User("Jan","Kowal3");
const user2 = new User("Jan","Kowal12");


print.log(user.getFullName())
print.log(user2.getFullName())
print.log(indexedArray)