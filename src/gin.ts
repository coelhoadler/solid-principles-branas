import Item from "./item";

export default class Gin extends Item {

    constructor(description: string, price: number) {
        super('Gin', description, price); 
    }

    getTax(): number {
        return 0.3;
    }
}