class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.numbers = [];
        this.carPay = {};
    }

    addCar(carModel, carNumber) {
        if(this.capacity == 0){
            throw new Error('Not enough parking space.');
        }else{
            this.capacity -= 1;
            this.numbers.push(carNumber);
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false
            });

            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }

    removeCar( carNumber ) {
        if(!this.numbers.includes(carNumber)){
            throw new Error("The car, you're looking for, is not found.");
        }else if(this.carPay[carNumber] == undefined){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }else{
            for(let car of this.vehicles){
                if(car[carNumber] == carNumber){
                    delete this.vehicles[car];
                }
            }
            let index = this.numbers.indexOf(carNumber);
            this.numbers.splice(index, 1);

            return `${carNumber} left the parking lot.`;
        }
    }

    pay( carNumber ) {
        if(!this.numbers.includes(carNumber)){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }else if(this.carPay[carNumber] == true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }else {
            this.carPay[carNumber] = true;
            for(let car of this.vehicles){
                if(car[carNumber] == carNumber){
                    car[payed] = true;
                }
            }

            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }

    getStatistics(carNumber) {
        if(carNumber == undefined){
            let result = [];
            result.push(`The Parking Lot has ${this.capacity} empty spots left.`);
            let sorted = this.vehicles.sort((a, b) => a.carNumber.localeCompare(b.carNumber));

            for(let veh of sorted){
                let res = '';
                if(veh.payed == false){
                    res = 'Not payed'
                }else{
                    res = 'Payed'
                }
                result.push(`${veh.carModel} == ${veh.carNumber} - ${res}`)
            }

            return result.join('\n');

        }else{
            for(let car of this.vehicles){
                if(car.carNumber == carNumber){
                    let res = '';
                    if(car.payed == false){
                        res = 'Not payed';
                    }else{
                        res = 'Payed';
                    }
                    return `${car.carModel} == ${car.carNumber} - ${res}`;
                }
            }
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Audi A6", "PB4408BH"));
console.log(parking.getStatistics());

console.log(parking.removeCar("TX3691CA"));
console.log(parking.pay("TX3691CA"));
console.log(parking.pay("PB4408BH"));

console.log(parking.removeCar("iji"));
