let subscribers: Subscribers = {};

interface Subscribers {
    [key: string]: Subscriber
}

interface State {
    [key: string]: any
}

class Subscriber {
    private readonly callback: (state: any) => void;
    public channel: string;

    constructor(callback: (state: any) => void, channel: string) {
        this.callback = callback;
        this.channel = channel;
    }

    update = (state: any) => {
        this.callback(state)
    }
}


export class StorageListener<T> {
    private channelKey: string;
    private clientsIds: number[] = []
    private _state: State;

    constructor(channelKey: string) {
        console.debug(`StorageListener(constructor) channelKey: ${channelKey}`)
        this.channelKey = channelKey;
        this._state = {} as State;
    };

    private state = async (): Promise<State> => {
        return this._state;
    }

    setState = async (value: T): Promise<void> => {
        console.debug(`StorageListener(setState) storage: ${this.channelKey}`)
        const state = await this.state();
        state[this.channelKey] = value;
        this.updateSubscribers();
    };

    getState = async (): Promise<T | undefined> => {
        console.debug(`StorageListener(getState) storage: ${this.channelKey}`)

        const state = await this.state();
        if (state) {
            return state[this.channelKey] ?? undefined;
        } else {
            return undefined;
        }
    };

    existState = async (): Promise<boolean> => {
        console.debug(`StorageListener(existState)`)
        const state = await this.state();
        return state[this.channelKey] !== undefined;
    };

    clearStorage = async (): Promise<void> => {
        console.debug(`StorageListener(clearStorage) storage: ${this.channelKey}`)
        const state = await this.state();
        state[this.channelKey] = null;
        this.updateSubscribers();
    };


    private updateSubscribers = (): void => {
        console.debug(`StorageListener(updateSubscribers) storage: ${this.channelKey}`)
        this.state().then(state => {
            for (const key in subscribers) {
                const subscriber: Subscriber = subscribers[key];
                if (subscriber.channel === this.channelKey) {
                        subscriber.update(state[this.channelKey])
                }
            }
        })
    };

    addSubscriber = async (callback: (state: T) => void): Promise<void> => {
        const clientId = this.clientsIds.length + 1
        this.clientsIds.push(clientId)
        console.debug(`StorageListener(addSubscriber) storage: ${this.channelKey}, clientId: ${clientId}`)
        const state = await this.state();

        subscribers[clientId] = new Subscriber(callback, this.channelKey);
        subscribers[clientId].update(state[this.channelKey]);
    };

    removeSubscribers = (): void => {
        this.clientsIds.forEach(clientId => {
            console.log(`Remove subscriber: ${clientId}`)
            return (delete subscribers[clientId])
        });
    };
}