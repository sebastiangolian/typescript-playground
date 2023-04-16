import { testAsyncStorage } from "./async-storage/index.js";
import { useDeviceService } from "./async-storage/service.provider.js";
import { testAdapter } from "./patterns/adapter.js";
import { testMediator } from "./patterns/mediator.js";
import { testRepository } from "./patterns/repository.js";

// testAdapter();
// testAsyncStorage()
// mediatorRun().then()
testRepository();
