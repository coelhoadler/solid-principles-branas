import Item from "./item";

export default class Order {

    private items: Item[];
    
    constructor() {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal(): number {
        let total =  0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }

    getTaxes(): number {
        let taxes =  0;

        this.items.reduce((acc, item) => taxes += item.calculateTax(), 0);

        return taxes;
    }    
};