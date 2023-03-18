import { useDeviceService } from "./service.provider.js"

export async function testAsyncStorage(): Promise<void> {
    useDeviceService().onChange((device) => { if (device) console.log("listener 1", device) })
    useDeviceService().onChange((device) => { if (device) console.log("listener 2", device) })

    setTimeout(async () => await useDeviceService().updateName("name after 2 sec"), 2000)
    setTimeout(async () => await useDeviceService().updateName("name after 4 sec"), 4000)
    setTimeout(async () => await useDeviceService().updateName("name after 6 sec"), 6000)
    setTimeout(async () => useDeviceService().removeSubscribers(), 10000)
}