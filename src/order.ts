import Item from "./Item";
import TaxItem from "./TaxItem";
import { MessageData } from "./MessageData";

export default class Order {

    private items: Item[];
    private messageData: MessageData;

    constructor(messageData: MessageData) {
        this.items = [];
        this.messageData = messageData;
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }

    getTaxes(): number {
        let taxes = 0;

        this.items.reduce((acc, item) => {
            if (item instanceof TaxItem) {
                taxes += item.calculateTax();
            }
            return taxes;
        }, 0);

        return taxes;
    }

    async printMessage(lang: string) {
        const total = this.getTotal();
        const taxes = this.getTaxes();

        return await (await this.messageData.read(lang)).replace('${total}', total.toString()).replace('${taxes}', taxes.toString());
    }
};