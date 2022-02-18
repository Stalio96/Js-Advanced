function smallestTwoNumbers(input) {

    let first = Math.min(...input);

    let index = input.indexOf(first);

    let spliced = input.splice(index, 1);

    let second = Math.min(...input);

    let result = [first, second];

    console.log(result.join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])