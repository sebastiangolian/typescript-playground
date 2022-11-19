import { getDeviceStorage } from "../storage.provider.js";
import { IStorageListener } from "../storage.service.js";

export interface IDeviceService {
    get(): Promise<DeviceModel>
    updateName(name: string): Promise<void>
    onChange(onUpdate: (state: DeviceModel) => any): void
}

export class DeviceService {
    private readonly deviceStorage: IStorageListener<DeviceModel>;
    constructor() {
        console.debug("DeviceService(constructor)")
        this.deviceStorage = getDeviceStorage();
    }

    public async get(): Promise<DeviceModel> {
        return await this.deviceStorage.getState() ?? { id: 0, name: '' } as DeviceModel;
    }

    public async updateName(name: string): Promise<void> {
        const currentState = await this.get();
        currentState.name = name;
        return this.deviceStorage.setState(currentState)
    }

    public onChange(onUpdate: (state: DeviceModel) => any): void {
        this.deviceStorage.addSubscriber(onUpdate);
    }
}