import Item from "./item";

export default class Juice extends Item {

    constructor(description: string, price: number) {
        super('Juice', description, price); 
    }

    getTax(): number {
        return 0.2;
    }
}