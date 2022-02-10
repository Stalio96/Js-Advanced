const { expect } = require('chai');
const isOddorEven = require('/.isOddOrEven.test')
describe('Is the number odd or even', () => {
    it('is even', () => {
        expect(isOddOrEven('stri')).to.equal('even');
    });

    it('is odd', () => {
        expect(isOddOrEven('sti')).to.equal('odd');
    });

    it('is undefined', () => {
        expect(isOddOrEven(56)).to.be.undefined;
    });

    it('is undefined', () => {
        expect(isOddOrEven([5,6])).to.be.undefined;
    });

    it('is undefined', () => {
        expect(isOddOrEven(ifad)).to.be.undefined;
    });
})