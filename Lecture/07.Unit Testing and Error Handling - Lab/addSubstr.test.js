const { expect } = require('chai');
const { createCalculator} = require('./addSbustr');


describe('Summator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator()
    })

    it('it has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })

    it('add number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1)
    })

    it('multiple number', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3)
    })

    it('subtract number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1)
    })

    it('multiple number', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3)
    })

    it('multiple number', () => {
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-2)
    })

    it('multiple number', () => {
        instance.subtract(1);
        instance.add(2);
        expect(instance.get()).to.equal(1)
    })

    it('multiple number', () => {
        instance.subtract('1');
        instance.add(2);
        expect(instance.get()).to.equal(1)
    })
})