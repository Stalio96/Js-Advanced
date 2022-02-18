function biggestElement(input) {

    let biggest = 0;

    let arr1 = input.length;

    for (let i = 0; i < arr1; i++) {
        let arr2 = input[i].length;
        for (let j = 0; j < arr2; j++) {
            if (biggest < input[i][j]) {
                biggest = input[i][j];
            }
        }
    }

    return biggest;
}
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]

))