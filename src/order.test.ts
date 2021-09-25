import Beer from "./Beer";
import Gin from "./Gin";
import Juice from "./Juice";
import { MessaDataFile as MessageDataFileFS } from "./MessageDataFile";
import Order from "./Order";
import Water from "./Water";

test('should create a order and get total', () => {
    // given
    const order = new Order(new MessageDataFileFS());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Juice("DelValle", 8));
    order.addItem(new Gin("Tangueray", 180));

    // when
    const total = order.getTotal();

    // then
    expect(total).toBe(198);
});

test('should create a order and get total taxes', () => {
    const order = new Order(new MessageDataFileFS());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Juice("DelValle", 8));
    order.addItem(new Gin("Tangueray", 180));
    order.addItem(new Water("Minalba", 0));
    const taxes = order.getTaxes();

    expect(taxes).toBe(56.6);
});

test('should create a order and print a message - em português', async () => {
    const order = new Order(new MessageDataFileFS());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Juice("DelValle", 8));
    order.addItem(new Gin("Tangueray", 180));
    order.addItem(new Water("Minalba", 0));
    const expected = 'O total foi de R$198, os impostos foram R$56.6. Obrigado pelo pedido!';
    const message = await order.printMessage('pt');

    expect(message).toBe(expected);
});

test('should create a order and print a message - em inglês', async () => {
    const order = new Order(new MessageDataFileFS());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Juice("DelValle", 8));
    order.addItem(new Gin("Tangueray", 180));
    order.addItem(new Water("Minalba", 0));
    const expected = 'The total was R$198, the taxes was R$56.6. Thank you for the order!';
    const message = await order.printMessage('en');

    expect(message).toBe(expected);
});
