function juiceFlavour(arr){

    let objQuant = {};
    let objBot = {};

    for(let item of arr){
        let [fruit, quantity] = item.split(' => ');
        quantity = Number(quantity);

        if(!objQuant[fruit]){
            objQuant[fruit] = 0;
        }

        objQuant[fruit] += quantity;

        if(objQuant[fruit] >= 1000){
            if(!objBot[fruit]){
                objBot[fruit] = 0;
            }
            objBot[fruit] += Math.trunc(objQuant[fruit] / 1000);
            objQuant[fruit] = objQuant[fruit] % 1000;
        }
    }

    for(let [fr, bottle] of Object.entries(objBot)){
        console.log(`${fr} => ${bottle}`)
    }
}
juiceFlavour(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)