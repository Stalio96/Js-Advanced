class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.deposit = [];
    }

    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        if (this.allCustomers.length == 0) {
            this.allCustomers.push({ firstName, lastName, personalId });
            return { firstName, lastName, personalId };
        } else {
            let find = this.allCustomers.find((x) => {
                return x.firstName === customer.firstName || x.lastName === customer.lastName
            })
            if(find){
                throw new Error(`${find.firstName} ${find.lastName} is already our customer!`);
            }else{
                this.allCustomers.push({ firstName, lastName, personalId });
                return { firstName, lastName, personalId };
            }

        }
    }

    depositMoney(personalId, amount) {
        let find = this.allCustomers.find((x) => {
            return x.personalId == personalId
        })

        if(!personalId){
            throw new Error(`We have no customer with this ID!`);
        }else{
            this.deposit.push({personalId: amount});
            return `${this.deposit[personalId]}$`
        }
    }
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
