function lowestPricesInCities(arr){

    const obj = {};

    for(let town of arr){
        let [city, product, price] = town.split(' | ');
        price = Number(price);

        if(!obj[product]){
            obj[product] = {};
        }

        obj[product][city] = price;
    }

    for(let products in obj){
        let sorted = Object.entries(obj[products]).sort((a, b) => a[1] - b[1]);

        console.log(`${products} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)