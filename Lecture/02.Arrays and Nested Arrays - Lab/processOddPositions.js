function processOddPositions(input){

    let result = [];

    for(let i = 0; i < input.length; i++){
        if(i % 2 == 1){
            result.push(input[i]);
        }
    }

    result = result.map(x => x * 2).reverse().join(' ');

    return result;
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))