import { testAsyncStorage } from "./async-storage/index.js";
import { useDeviceService } from "./async-storage/service.provider.js";
import { abstractFactoryRun } from "./patterns/abstract-factory.js";
import { testAdapter } from "./patterns/adapter.js";
import { testMediator } from "./patterns/mediator.js";
import { testMediatorCommand } from "./patterns/mediator-command.js";
import { testRepository } from "./patterns/repository.js";
import { testStrategy } from "./patterns/strategy.js";

// abstractFactoryRun()
// testAdapter();
// testAsyncStorage()
// testMediatorCommand().then()
// testRepository();
// testStrategy()
testMediator();
