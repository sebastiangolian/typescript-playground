import { DeviceService } from "./services/device.service.js";
import { RandomService } from "./services/random.service.js";

const deviceService = new DeviceService();
const randomService = new RandomService();

export function useDeviceService(): DeviceService { return deviceService; }
export function useRandomService(): RandomService { return randomService; }