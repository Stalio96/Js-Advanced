const { expect } = require('chai');
const isSymmetric = require('./symmetry');

describe('Symmetry of array', ()=> {
    it('if arr is symmetric', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    })

    it('if arr is symmetric', () => {
        expect(isSymmetric([1,2,1,1])).to.be.false;
    })

    it('if arr is symmetric', () => {
        expect(isSymmetric([1,2,'1',1])).to.be.false;
    })

    it('if arr is symmetric', () => {
        expect(isSymmetric([1,2,1,2,1])).to.be.true;
    })

    it('if arr is symmetric', () => {
        expect(isSymmetric(1)).to.be.false;
    })

    it('if arr is symmetric', () => {
        expect(isSymmetric('arr')).to.be.false;
    })

    describe('Symmetry of array', ()=> {
        it('if arr is symmetric', () => {
            expect(isSymmetric([1,2,2,1])).to.be.true;
        })
    
        it('if arr is symmetric', () => {
            expect(isSymmetric([1,2,1,1])).to.be.false;
        })
    
        it('if arr is symmetric', () => {
            expect(isSymmetric([1,2,'1',1])).to.be.false;
        })
    
        it('if arr is symmetric', () => {
            expect(isSymmetric([1,2,1,2,1])).to.be.true;
        })
    
        it('if arr is symmetric', () => {
            expect(isSymmetric(1)).to.be.false;
        })
    
        it('if arr is symmetric', () => {
            expect(isSymmetric([1,2,'1'])).to.be.false;
        })
    })
})