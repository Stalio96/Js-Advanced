const { expect } = require('chai');
const sum = require('./sum');

describe('Sum checker', () => {
    it('takes an array', () => {
        expect(sum([5,6,6])).to.be.true;
    })

    it('if the answer is the sum', () => {
        expect(sum([5,6,7])).to.equal(18)
    })

    it('if aray with string', () => {
        expect(sum([5,'twenty',7])).to.be.false;
    })

    it('if aray with string', () => {
        expect(sum(5)).to.be.false;
    })

    it('if aray with string', () => {
        expect(sum('dssff')).to.be.false;
    })
})



