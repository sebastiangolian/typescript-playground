import { DeviceService, IDeviceService } from "./services/device.service.js";
import { IRandomService, RandomService } from "./services/random.service.js";

const deviceService = new DeviceService();
const randomService = new RandomService();

export function useDeviceService(): IDeviceService { return deviceService; }
export function useRandomService(): IRandomService { return randomService; }