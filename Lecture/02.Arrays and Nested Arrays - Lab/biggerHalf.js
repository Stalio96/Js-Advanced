function biggerHalf(input){

    input = input.sort((a, b) => a - b);

    let spliced = input.splice(input.length/2);

    return spliced;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))