import { indexedArray } from "./classes/array-index.js";
import { PrinterPluginColor, Printer } from "./classes/printer.js";
import { User } from "./classes/user.js";
import { abstractFactoryRun } from "./patterns/abstract-factory.js";
import { singletonRun } from "./patterns/singleton.js";
import { Print } from "./utils/print.js";



// const print = new Print("test");
// const user = new User("Jan", "Kowal3");
// const user2 = new User("Jan", "Kowal12");
// const printer = new Printer();
// printer.addPlugin(new PrinterPluginColor());
// console.log(printer.print())


singletonRun()