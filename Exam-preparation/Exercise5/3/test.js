const { equal } = require('assert');
const { expect } = require('chai');
const pizzUni = require('./pizza');


describe("Tests", () => {
    describe("makeAnOrder", () => {
        it("if pizza missing", () => {
            expect(() => pizzUni.makeAnOrder({dhduhs: ''})).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(pizzUni.makeAnOrder({orderedPizza: 'asas'})).to.equal('You just ordered asas');
            expect(pizzUni.makeAnOrder({orderedPizza: 'asas', orderedDrink: 'sdsd'})).to.equal('You just ordered asas and sdsd.');
        });
    });

    describe("getRemainingWork", () => {
        it("Is it ready", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'the name of the pizza', status: 'preparing'}])).to.equal('The following pizzas are still preparing: the name of the pizza.');
            expect(pizzUni.getRemainingWork([{pizzaName: 'the name of the pizza', status: 'ready'}])).to.equal('All orders are complete!')
        });
    });

    describe("orderType", () => {
        it("Check discount", () => {
            expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9)
            expect(pizzUni.orderType(10, 'Delivery')).to.equal(10)
        });
    });
});
