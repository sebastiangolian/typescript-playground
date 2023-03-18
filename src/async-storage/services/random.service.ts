export class RandomService {
    constructor() {
        console.debug("RandomService(constructor)")
    }

    public async string(len: number): Promise<string> {
        const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
        const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
        const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
        const allNumbers = [..."0123456789"];
        const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];
    
        return [...Array(len)].map(i => base[Math.random() * base.length | 0]).join('');
    }
}