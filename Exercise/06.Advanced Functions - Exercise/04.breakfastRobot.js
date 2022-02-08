function solution(){

    const recipes = {
        apple: {carbohydrates: 1, flavour: 2},
        lemonade: {carbohydrates: 10, flavour: 20},
        burger: {carbohydrates: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour:1},
        turkey: {protein: 10, carbohydrates: 10, fat: 10, flavour: 10}
    }

    const storage = {
        carbohydrates: 0,
        flavour: 0,
        protein: 0,
        fat: 0
    }

    function restock(element, quantity){
        storage[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity){
        let remainStorage = {};

        for(const element in recipes[recipe]){
            const remaining = storage[element] - recipes[recipe][element] * quantity;
            if(remaining < 0){
                return `Error: not enough ${element} in stock `
            }else{
                remainStorage[element] = remaining;
            }
        }

        Object.assign(storage, remainStorage);
        return 'Success';
    }

    function report(){
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrates} fat=${storage.fat} flavour=${storage.flavour}`
    }
    function control(str){
        const [command, item, quantity] = str.split(' ');

        if(command == 'restock'){
            return restock(item, Number(quantity));
        }else if(command == 'prepare'){
            return prepare(item, Number(quantity));
        }else if(command == 'report'){
            return report();
        }
    }

    return control;
}
let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); 
console.log (manager ("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); // Success 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); // Success 
console.log (manager ("report")); 