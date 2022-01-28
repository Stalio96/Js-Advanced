function storeCatalogue(arr){

    let obj = {};

    for(let items of arr){
        let [product, value] = items.split(' : ');
        let alpha = product[0];

        if(!obj[alpha]){
            obj[alpha] = {};
        }
        obj[alpha][product] = Number(value);
    }

    let sortedAlpha = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])); 

    for(let sort of sortedAlpha){
        console.log(sort[0]);
        let sortedPord = Object.entries(sort[1]).sort((a, b) => a[0].localeCompare(b[0]));
        for(let srt of sortedPord){
            console.log(`${srt[0]}: ${srt[1]}`)
        }
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)