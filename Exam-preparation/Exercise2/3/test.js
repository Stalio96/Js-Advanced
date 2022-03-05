const { expect } = require('chai');
const cinema = require('./cinema');


describe('Cinema', () => {
    describe('showMovies', () => {
        it('if array = 0', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        })

        it('correct movies', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker')
        })

        it('otherwise', () => {
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong')
        })
    })

    describe('ticketPrice', () => {
        it('schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
        })

        it('schedule', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
        })

        it('schedule', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        })

        it('schedule', () => {
            expect(() => cinema.ticketPrice('sddsd')).to.throw('Invalid projection type.')
        })

        it('schedule', () => {
            expect(() => cinema.ticketPrice(5)).to.throw('Invalid projection type.')
        })
    })

    describe('swapSeatsInHall', () => {
        it('schedule', () => {
            expect(cinema.swapSeatsInHall(4, 15)).to.equal('Successful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(2, 3)).to.equal('Successful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(4)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(2, 21)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(4, -2)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(0, 21)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(4, 4)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(0, 2.1)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('schedule', () => {
            expect(cinema.swapSeatsInHall(0.5, 2)).to.equal('Unsuccessful change of seats in the hall.')
        })
    })
})