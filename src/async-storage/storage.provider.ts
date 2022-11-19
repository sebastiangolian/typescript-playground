import { IStorageListener, StorageListener } from "./storage.service.js";

const enum StorageType {
    Device = "device",
}

export function getDeviceStorage(): IStorageListener<DeviceModel> {
    return new StorageListener<DeviceModel>(StorageType.Device);
}