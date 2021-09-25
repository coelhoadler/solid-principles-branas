import Beer from "./beer";
import Gin from "./gin";
import Juice from "./juice";
import Order from "./order";



test('should create a order and get total', () => {
    // given
    const order = new Order();
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Juice("DelValle", 8));
    order.addItem(new Gin("Tangueray", 180));

    // when
    const total = order.getTotal();

    // then
    expect(total).toBe(198);
});

test('should create a order and get total taxes', () => {
    const order = new Order();
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Juice("DelValle", 8));
    order.addItem(new Gin("Tangueray", 180));
    const taxes = order.getTaxes();

    expect(taxes).toBe(56.6);
});