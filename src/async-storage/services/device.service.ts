import { useRandomService } from "../service.provider.js";
import { getDeviceStorage } from "../storage.provider.js";
import { StorageListener } from "../storage.service.js";


export class DeviceService {
    private readonly deviceStorage: StorageListener<DeviceModel>;
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
        currentState.updateKey = await useRandomService().string(10);
        return this.deviceStorage.setState(currentState)
    }

    public onChange(onUpdate: (state: DeviceModel) => any): void {
        this.deviceStorage.addSubscriber(onUpdate);
    }

    public removeSubscribers(): void {
        this.deviceStorage.removeSubscribers()
    }
}