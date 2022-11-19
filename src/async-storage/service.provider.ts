import { DeviceService, IDeviceService } from "./services/device.service.js";

const deviceService = new DeviceService();
export function useDeviceService(): IDeviceService { return deviceService; }