import { StorageListener } from "./storage.service.js";

const enum StorageType {
  Device = "device",
}

export function getDeviceStorage(): StorageListener<DeviceModel> {
  return new StorageListener<DeviceModel>(StorageType.Device);
}
