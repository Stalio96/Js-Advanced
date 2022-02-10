const { expect } = require('chai');
const { mathEnforcer } = require('./mathenforcer');

describe('function', () => {
    describe('', () => {
        it('addFive', () => {
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        })

        it('addFive success', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(1.1 + 2.2)).to.equal(8.3, 0.01);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })

    describe('', () => {
        it('subtractTen', () => {
            expect(mathEnforcer.subctractTen('1')).to.equal(undefined);
            expect(mathEnforcer.subctractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subctractTen(null)).to.equal(undefined);
        })

        it('subtractTen success', () => {
            expect(mathEnforcer.subctractTen(15)).to.equal(5);
            expect(mathEnforcer.subctractTen(10)).to.equal(0);
            expect(mathEnforcer.subctractTen(8)).to.equal(-2);
            expect(mathEnforcer.subctractTen(1.1 + 2.2)).to.closeTo(-6.7, 0.01);
        })
    })

    describe('', () => {
        it('sum', () => {
            expect(mathEnforcer.sum('1', 2)).to.equal(undefined);
            expect(mathEnforcer.sum(undefined, 2)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 2)).to.equal(undefined);
        })
        
        it('sum', () => {
            expect(mathEnforcer.sum(2, '1')).to.equal(undefined);
            expect(mathEnforcer.sum(2, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(2, null)).to.equal(undefined);
        })

        it('sum success', () => {
            expect(mathEnforcer.sum(2, 2)).to.equal(4);
            expect(mathEnforcer.sum(1.1 + 2.2, 2.1)).to.closeTo(5.4, 0.01);
            expect(mathEnforcer.sum(2, -2)).to.equal(0);
            expect(mathEnforcer.sum(-10, -2)).to.equal(-12);
        })
    })
})