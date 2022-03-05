class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let prod of products) {
            let [productName, productQuantity, productTotalPrice] = prod.split(' ');

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]){
                    this.stockProducts[productName] = {
                        quantity: Number(productQuantity),
                        price: productTotalPrice
                    }
                }else {
                    this.stockProducts[productName].quantity += Number(productQuantity);
                }

                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }else{
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price){
        if(!this.menu[meal]){
            this.menu[meal] = {
                products: {},
                price: price
            }

            for(let prod of neededProducts){
                let [name, quantity] = prod.split(' ');
    
    
                this.menu[meal].products[name] = quantity;
            }
            if(Object.keys(this.menu).length == 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        }else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu(){
        let result = [];
        const count = Object.keys(this.menu).length;
        if(count == 0){
            return `Our menu is not ready yet, please come later...`
        }else {
            for(let meals in this.menu){
                result.push(`${meals} - $ ${this.menu[meals].price}`)
            }

            return result.join('\n');
        }
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }else {
            const neededProducts = {};
            for(let prod in this.menu[meal].products){
                if(!this.stockProducts || this.menu[meal].products[prod] > this.stockProducts[prod].quantity){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }else{
                    neededProducts[prod] = Number(this.menu[meal].products[prod])
                }
            }
            
            for(let neededProduct in neededProducts){
                this.stockProducts[neededProduct].quantity -= neededProducts[neededProduct];
            }

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));


console.log(kitchen.showTheMenu());


kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));



