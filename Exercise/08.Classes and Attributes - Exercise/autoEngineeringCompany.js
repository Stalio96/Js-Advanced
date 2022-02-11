function carFactory(arrFact){

    let carBrands = new Map();

    for(let car of arrFact){
        let [brand, model, count] = car.split(' | ');
        count = Number(count);

        if(carBrands.has(brand)){
            let carBrand = carBrands.get(brand);
            if(carBrand.has(model)){
                let carModel = carBrand.get(model);
                carModel += count;
                carBrand.set(model, carModel)
            }else{
                carBrand.set(model, count);
            }
            
        }else{
            let modelMap = new Map();
            modelMap.set(model, count)
            carBrands.set(brand, modelMap);
        }
    }

    for(let keys of carBrands.keys()){
        console.log(keys);
        let brand = carBrands.get(keys);

        for(let modelKey of brand){
            let count = brand.get(modelKey);
            console.log(`###${modelKey[0]} -> ${modelKey[1]}`)
        }
    }
}
carFactory(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)