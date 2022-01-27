function sameNumbers(num){

    let numToStr = num.toString();
    let isSame = true;
    let n = numToStr[0];
    let sum = Number(n);

    for(let i = 1; i < numToStr.length; i++){
        sum += Number(numToStr[i]);
        if(n != numToStr[i]){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}
sameNumbers(1234)