interface ICarRentApi {
    getCarRegistrationNumber(carId: number): string
    rentCar(carId: number): string
}

class CarRentApi implements ICarRentApi {
    getCarRegistrationNumber(carId: number): string {
        return `Car ${carId} from CarRentApi`;
    }
    rentCar(carId: number): string {
        return `Rent car ${carId} from CarRentApi`;
    }
}

class NorwayCarRentApi {
    getCar(id: number, apiKey: string): string {
        return `Car ${id} from NorwayCarRentApi`;
    }

    rent(id: number): string {
        return `Rent car ${id} from NorwayCarRentApi`;
    }
}

class AdapterNorwayCarRentApi extends CarRentApi implements ICarRentApi {
    NORWAY_API_KEY = 'xxx'
    private adaptee: NorwayCarRentApi;

    constructor() {
        super();
        this.adaptee = new NorwayCarRentApi();
    }

    getCarRegistrationNumber(carId: number): string {
        return this.adaptee.getCar(carId, this.NORWAY_API_KEY);
    }

    rentCar(carId: number): string {
        return this.adaptee.rent(carId);
    }
}



export function testAdapter(): void {
    console.log(new CarRentApi().getCarRegistrationNumber(123))
    console.log(new AdapterNorwayCarRentApi().getCarRegistrationNumber(345))
    
    console.log(new CarRentApi().rentCar(123))
    console.log(new AdapterNorwayCarRentApi().rentCar(345))
}

