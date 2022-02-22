const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHex');


describe('RGB to Hex', () => {
    it('is it white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })

    it('is it black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    
    it('is it softuni blue', () => {
        expect(rgbToHexColor(35,68,101)).to.equal('#234465');
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor(-1,6,101)).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor(-1,6,256)).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor(-1,6,'2')).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor('1',6,256)).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor(['1',6,256])).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor(-1,-1,-1)).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor(256,256,256)).to.be.undefined;
    })

    it('it returned undefined', () => {
        expect(rgbToHexColor('5','9','3')).to.be.undefined;
    })
})