import Item from "./item";

export default class Beer extends Item {

    constructor(description: string, price: number) {
        super('Beer', description, price); 
    }

    getTax(): number {
        return 0.1;
    }
}