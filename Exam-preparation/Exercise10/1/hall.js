class Movie{
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.allTickets = 0;
    }

    newScreening(date, hall, description){
        let isNew = this.screenings.find((x) => x.date == date && x.hall == hall);

        if(isNew){
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }else{
            this.screenings.push({
                date,
                hall,
                description
            });

            return `New screening of ${this.movieName} is added.`;
        }
    }

    endScreening(date, hall, soldTickets){
        let isNew = this.screenings.find((x) => x.date == date && x.hall == hall);
        if(isNew == undefined){
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }else{
            let currentProfit = soldTickets * this.ticketPrice;
            this.totalProfit += currentProfit;
            this.allTickets += soldTickets;

            let index = this.screenings.indexOf(isNew);
            this.screenings.splice(index, 1);

            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
        }
    }

    toString(){
        let result = '';
        
        result += `${this.movieName} full information:\n`;
        result += `Total profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.allTickets}\n`;
        
        if(this.screenings.length > 0){
            result += `Remaining film screenings:\n`;
            let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            
            for(let item of sorted){
                result += `${item.hall} - ${item.date} - ${item.description}\n`;
            }
        }else{
            result += `No more screenings!`;
        }

        return result;
    }
}

let Movie = result;
        let m = new Movie('Wonder Woman 1984', '10.00');
        m.newScreening('October 2, 2020', 'IMAX 3D', `3D`);
        m.newScreening('October 3, 2020', 'Main', `regular`);
        m.newScreening('October 4, 2020', 'IMAX 3D', `3D`);
        m.endScreening('October 2, 2020', 'IMAX 3D', 150);
        m.endScreening('October 3, 2020', 'Main', 78);
        console.log(m.toString())

        let outputFirst = `Wonder Woman 1984 full information:
Total profit: 2280$
Sold Tickets: 228
Remaining film screenings:
IMAX 3D - October 4, 2020 - 3D`;
        expect(m.toString()).to.be.equal(outputFirst, 'Incorrect output');
        m.newScreening('October 4, 2020', '235', `regular`);
        m.newScreening('October 5, 2020', 'Main', `regular`);
        m.newScreening('October 3, 2020', '235', `regular`);
        m.newScreening('October 4, 2020', 'Main', `regular`);
        let outputSecond = `Wonder Woman 1984 full information:
Total profit: 2280$
Sold Tickets: 228
Remaining film screenings:
235 - October 4, 2020 - regular
235 - October 3, 2020 - regular
IMAX 3D - October 4, 2020 - 3D
Main - October 5, 2020 - regular
Main - October 4, 2020 - regular`;