class ChristmasDinner {
    constructor(budget){
        if(this.budget < 0){
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    //get budget(){
    //    if(this.budget < 0){
    //        throw new Error('The budget cannot be a negative number');
    //    }else{
    //        return this.budget;
    //    }
    //}

    shopping(product){
        let typeProduct = product[0];
        let priceProduct = product[1];

        if(this.budget < priceProduct){
            throw new Error('Not enough money to buy this product');
        }else {
            this.budget -= priceProduct;
            this.products.push(typeProduct);

            return `You have successfully bought ${typeProduct}!`;
        }
    }

    recipes(recipe){
        let isRec = true;
        let {recipeName, productsList} = recipe;
        for(let prod of productsList){
            if(!this.products.includes(prod)){
                isRec = false;
            }
        }
        if(isRec == true){
            this.dishes.push({recipeName, productsList});
            return `${recipeName} has been successfully cooked!`;
        } else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish){

        if(Object.values(this.dishes).includes(dish)){
            throw new Error('We do not have this dish');
        }else if(this.guests.hasOwnProperty(name)){
            throw new Error('This guest has already been invited');
        }else{
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance(){
        let result = '';
        
        for(let name of Object.keys(this.guests)){
            let dish = this.guests[name]
            let prods = [];
            for(let prod of this.dishes){
                if(prod.recipeName == dish){
                    prods = prod.productsList;
                }
            }
            result += `${name} will eat ${dish}, which consists of ${prods.join(', ')}\n`;
        }
        return result;
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
