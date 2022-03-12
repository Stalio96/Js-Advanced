const { expect } = require('chai');
const library = require('./library');


describe("Tests …", () => {
    describe("calcPriceOfBook", () => {
        it("discount", () => {
            expect(library.calcPriceOfBook('dsd', 1980)).to.equal('Price of dsd is 10.00')
            expect(library.calcPriceOfBook('dsd', 1970)).to.equal('Price of dsd is 10.00')
        });

        it("error", () => {
            expect(() => library.calcPriceOfBook('dsd', 'ddwd')).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(15, '1980')).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook('ddsd', 1985.5)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(15, 1985.5)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(15, '1985.5')).to.throw("Invalid input")
        });

        it("not discount", () => {
            expect(library.calcPriceOfBook('dsd', 1981)).to.equal('Price of dsd is 20.00')
            expect(library.calcPriceOfBook('dsd', 2001)).to.equal('Price of dsd is 20.00')
        });
    });

    describe("findBook", () => {
        it("if zero", () => {
            expect(() => library.findBook([], 'sd')).to.throw("No books currently available")
        });

        it("if is present", () => {
            expect(library.findBook(['a', 'b', 'c'], 'b')).to.equal("We found the book you want.")
            expect(library.findBook(['a', 'b', 'c'], 'a')).to.equal("We found the book you want.")
        });

        it("if is not present", () => {
            expect(library.findBook(['a', 'b', 'c'], 'g')).to.equal("The book you are looking for is not here!")
            expect(library.findBook(['a', 'b', 'c'], 'f')).to.equal("The book you are looking for is not here!")
        });
    });

    describe("arrangeTheBooks", () => {
        it("if is not inreger", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input")
            //expect(() => library.arrangeTheBooks('1')).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(1.5)).to.throw("Invalid input")
        });

        it("if is not inreger", () => {
            expect(library.arrangeTheBooks(15)).to.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
            //expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.")
        });

        it("if is not inreger", () => {
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.")
            //expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        });
    });
});
