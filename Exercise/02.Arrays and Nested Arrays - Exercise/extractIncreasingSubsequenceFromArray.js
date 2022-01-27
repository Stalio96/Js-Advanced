function extractIncreasingSubsequenceFromArray(arr){

    let biggest = 0;
    let filtered = arr.filter((el) => {
        if(el >= biggest){
            biggest = el;
            return true;
        }
        return false;
    })

    return filtered;
}
console.log(extractIncreasingSubsequenceFromArray([1, 
    2, 
    3,
    4]
    
    ))