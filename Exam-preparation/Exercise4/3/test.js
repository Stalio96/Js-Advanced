const { expect } = require('chai');
const dealership = require('./dealership');


describe('Dealership', () => {
    describe('New car cost', () => {
        it('check if there is old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 70000)).to.equal(55000);
            expect(dealership.newCarCost('Audi A6 4K', 70000)).to.equal(50000);
            expect(dealership.newCarCost('Audi A8 D5', 70000)).to.equal(45000);
            expect(dealership.newCarCost('Audi TT 8J', 70000)).to.equal(56000);
        })

        it('check if there is old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 7000)).to.equal(-8000);
            expect(dealership.newCarCost('Audi A6 4K', 7000)).to.equal(-13000);
            expect(dealership.newCarCost('Audi A8 D5', 7000)).to.equal(-18000);
            expect(dealership.newCarCost('Audi TT 8J', 7000)).to.equal(-7000);
        })

        it('check if there is old car', () => {
            expect(dealership.newCarCost('sdsd',7000)).to.equal(7000);
            expect(dealership.newCarCost('', 7000)).to.equal(7000);
            expect(dealership.newCarCost('', 7000)).to.equal(7000);
            expect(dealership.newCarCost('', 7000)).to.equal(7000);
        })
    })

    describe('Car equipment', () => {
        it('extras', () => {
           expect(dealership.carEquipment(['a', 'b', 'c', 'd'], [0])).to.deep.equal([ 'a' ]);
           expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2, 3])).to.deep.equal(['sliding roof', 'sport rims', 'navigation']);
           expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 3])).to.deep.equal(['heated seats', 'navigation']);
           expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2])).to.deep.equal(['heated seats', 'sport rims']);
        })
    })

    describe('Euro category', () => {
        it('below 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })

        it('over 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
    })
});