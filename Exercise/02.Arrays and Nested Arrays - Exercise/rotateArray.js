function rotateArray(arr, steps) {

    for (let i = 0; i < steps; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

)