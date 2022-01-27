function sortingNumbers(arr){

    let array = arr.sort((a, b) => a - b);

    let half = Math.ceil(array.length / 2);

    let result = [];

    for(let i = 0; i < half; i++){
        result.push(array.shift());
        result.push(array.pop());
    }

    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))