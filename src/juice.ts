import TaxItem from "./TaxItem";

export default class Juice extends TaxItem {

    constructor(description: string, price: number) {
        super('Juice', description, price); 
    }

    getTax(): number {
        return 0.2;
    }
}