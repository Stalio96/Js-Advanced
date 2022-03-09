class Vacationer{
    constructor(fullName, creditCard = [111, "", 111]){
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();

       //if(typeof creditCard[0] == 'number' && typeof creditCard[1] == 'string' && typeof creditCard[2] == 'number'){
       //    this.creditCard = {
       //        cardNumber,
       //        expirationDate,
       //        securityNumber
       //    };
       //}
        this.wishList = [];
    }

    get fullName(){
        return this._fullName;
    }

    set fullName(value){
        if(value.length != 3){
            throw new Error(`Name must include first name, middle name and last name`);
        }

        let [first, middle, last] = value;
        let pattern = /[A-Z][a-z]+/;


        if(!pattern.test(first) || !pattern.test(middle) || !pattern.test(last)){
            throw new Error('Invalid full name');
        }

        return this._fullName = value.join(' ');
    }

    generateIDNumber(){
        let fisrt = this.fullName.split(' ')[0].substring(0, 1).charCodeAt(0);
        let middleLength = this.fullName.split(' ')[1].length;

        let num = 231 * fisrt + 139 * middleLength;

        let lengtht = this.fullName.split(' ')[2].length

        let lastNameVolew = this.fullName.split(' ')[2].substring(lengtht-1);

        if(lastNameVolew == 'a' || lastNameVolew == 'e' || lastNameVolew == 'o' || lastNameVolew == 'i' || lastNameVolew == 'u'){
            let numS = num.toString() + '8';
            return numS;
        }else {
            let numS = num.toString() + '7';
            return numS;
        }
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
