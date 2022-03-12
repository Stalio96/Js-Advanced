class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp[condition] == undefined) {
            throw new Error('Unsuccessful registration at the camp.')
        }

        let isInlist = this.listOfParticipants.some((p) => {
            if (p.name == name) {
                return true;
            } else {
                return false;
            }
        });

        if (isInlist == false) {
            if (this.priceForTheCamp[condition] > money) {
                return 'The money is not enough to pay the stay at the camp.';
            } else {
                this.listOfParticipants.push({
                    name,
                    condition,
                    power: 100,
                    wins: 0
                });
                return `The ${name} was successfully registered.`;
            }
        } else if (isInlist == true) {
            return `The ${name} is already registered at the camp.`;
        }
    }

    unregisterParticipant(name) {
        let isIn = this.listOfParticipants.some((p) => {
            if (p.name == name) {
                return true;
            } else {
                return false;
            }
        });
        if (isIn == false) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else if (isIn == true) {
            let index = 0;
            for (let i = 0; i < this.listOfParticipants.length; i++) {
                let participance = this.listOfParticipants[i].name;
                if (participance == name) {
                    index = i;
                }
            }
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay (typeOfGame, participant1, participant2){
        if(typeOfGame == 'WaterBalloonFights'){
            let condition1 = this.listOfParticipants.find((p) => {
                if(p.name == participant1){
                    return p.condition;
                }
            });
            let condition2 = this.listOfParticipants.find((p) => {
                if(p.name == participant2){
                    return p.condition;
                }
            });
            
            if(condition1 == undefined || condition2 == undefined){
                if(condition2 == undefined && condition1 == undefined){
                    throw new Error("Invalid entered name.");
                }else {
                    throw new Error('Invalid entered name.');
                }
            }else if(condition2.condition != condition1.condition){
                throw new Error('Choose players with equal condition.')
            }else if(condition2.condition == condition1.condition){
                let power1 = this.listOfParticipants.find((p) => {
                    if(p.name == participant1){
                        return p.power;
                    }
                });
                let power2 = this.listOfParticipants.find((p) => {
                    if(p.name == participant2){
                        return p.power;
                    }
                });

                if(power1.power == power2.power){
                    return 'There is no winner.';
                }else if(power1.power > power2.power){
                    this.listOfParticipants.some((p) => {
                        if(p.name == participant1){
                            p.wins+=1
                        }
                    });
                    return `The ${participant1} is winner in the game ${typeOfGame}.`;
                }else if(power2.power > power1.power){
                    this.listOfParticipants.some((p) => {
                        if(p.name == participant2){
                            p.wins+=1
                        }
                    });
                    return `The ${participant2} is winner in the game ${typeOfGame}.`;
                }
            }
        }else if(typeOfGame == 'Battleship'){
            this.listOfParticipants.map((p) => {
                if(p.name == participant1){
                    p.power+=20;
                }
            });

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString(){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        let sorted = this.listOfParticipants.sort((a, b) => a.wins - b.wins)
        for(let items of sorted){
            result.push(`${items.name} - ${items.condition} - ${items.power} - ${items.wins}`)
        }

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



