const testNumbers = require('./testNumbers');
const { expect } = require('chai');


describe('Test Numbers', () => {
    
    describe('Sum numbers', () => {
        it('check the parameters', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(1, 2.5)).to.equal('3.50');
        })

        it('check the parameters', () => {
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        })
    })

    describe('Number checker', () => {
        it('Parse input', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        })

        it('Parse input', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('3')).to.equal('The number is odd!');
        })

        it('Parse input', () => {
            expect(() => testNumbers.numberChecker('i')).to.throw();
        })
    })

    describe('Average sum of array', () => {
        it('Check the array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-2, 2, 3])).to.equal(1);
        })
    })
})