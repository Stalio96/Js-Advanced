function fruits(fruit, weight, money){

    let kg = weight/1000;
    let price = kg * money;

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}
fruits('orange', 2500, 1.80)