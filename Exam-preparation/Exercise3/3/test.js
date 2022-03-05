const { expect } = require('chai');
const numberOperations = require('./03. Number Operations_Resources');


describe('Number of operations', () => {
    describe('powNumber', () => {
        it('the write return', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(3)).to.equal(9);
        })
    })

    describe('numberChecker', () => {
        it('validate', () => {
            expect(() => numberOperations.numberChecker(NaN)).to.throw();
            expect(() => numberOperations.numberChecker('s')).to.throw();
        })

        it('if ist lower than 100', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('5')).to.equal('The number is lower than 100!');
        })

        it('if ist greater than 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(120)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('105')).to.equal('The number is greater or equal to 100!');
        })
    })

    describe('sumArrays', () => {
        it('sumArr', () => {
            expect(numberOperations.sumArrays([1, 2, 3],[4, 5, 6, 7])).to.equal([5, 7, 9, 7])
        })
    })
})