function cookingByNumbers(num, op1, op2, op3, op4, op5){

    num = Number(num);

    let arr = [op1, op2, op3, op4, op5];

    for(let i = 0; i < arr.length; i++){
        let operation = arr[i];

        switch(operation){
            case 'chop':
                num /= 2;
                console.log(num)
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num)
                break;
            case 'spice':
                num += 1;
                console.log(num)
                break;
            case 'bake':
                num *= 3;
                console.log(num)
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num)
                break;            
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')