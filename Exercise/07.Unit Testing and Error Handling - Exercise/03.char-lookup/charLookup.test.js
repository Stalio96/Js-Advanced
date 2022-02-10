const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('Is it the right index', () => {
    it('if the first parameter not a string', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar(undefined, 1)).to.equal(undefined);
    })

    it('if the second parameter is not a number', () => {
        expect(lookupChar('some', [])).to.equal(undefined);
        expect(lookupChar('some', 's')).to.equal(undefined);
        expect(lookupChar('some', null)).to.equal(undefined);
        expect(lookupChar('some', 1.23)).to.equal(undefined);
        expect(lookupChar('some', undefined)).to.equal(undefined);
        expect(lookupChar('some', '1')).to.equal(undefined);
    })

    it('if the second parameter is not in range', () => {
        expect(lookupChar('some', -1)).to.equal('Incorrect index');
        expect(lookupChar('some', 4)).to.equal('Incorrect index');
    })

    it('if the the answer is correct', () => {
        expect(lookupChar('some', 2)).to.equal('m');
        expect(lookupChar('some', 0)).to.equal('s');
    })
})