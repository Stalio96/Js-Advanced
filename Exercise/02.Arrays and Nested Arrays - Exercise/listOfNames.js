function listOfNames(arr){

    arr1 = arr.sort((a, b) => a.localeCompare(b));
    let initial = 1;

    for(let name of arr1){
        console.log(`${initial}.${name}`);
        initial++;
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])