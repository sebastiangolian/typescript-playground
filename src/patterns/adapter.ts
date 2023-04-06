interface ICarRentApi {
    getCarRegistrationNumber(carId: number): string
    rentCar(carId: number): string
}

class NorwayCarRentApi {
    getCar(id: number): string {
        return `Car ${id} from NorwayCarRentApi`;
    }

    rent(id: number, apiKey: string): string {
        return `Rent car ${id} from NorwayCarRentApi`;
    }
}

class AdapterNorwayCarRentApi implements ICarRentApi {
    NORWAY_API_KEY = 'xxx'
    private adaptee: NorwayCarRentApi;

    constructor() {
        this.adaptee = new NorwayCarRentApi();
    }

    getCarRegistrationNumber(carId: number): string {
        return this.adaptee.getCar(carId);
    }

    rentCar(carId: number): string {
        return this.adaptee.rent(carId, this.NORWAY_API_KEY);
    }
}


class ApiFacade {
    private api: ICarRentApi;
    constructor(api: ICarRentApi) {
        this.api = api;
    }
    getCarRegistrationNumber(carId: number): string {
        return this.api.getCarRegistrationNumber(carId)
    }

    rentCar(carId: number): string {
        return this.api.rentCar(carId)
    }
}




export function testAdapter(): void {
    const facade = new ApiFacade(new AdapterNorwayCarRentApi())
    console.log(facade.getCarRegistrationNumber(123))
    console.log(facade.rentCar(123))
}

