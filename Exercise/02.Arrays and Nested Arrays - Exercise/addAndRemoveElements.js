function addAndRemoveElements(arr){

    let result = [];
    let initial = 1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'add'){
            result.push(initial);
        }else{
            result.pop();
        }
        initial++;
    }
    if(result.length){
        console.log(result.join('\n'));
    }else{
        console.log('Empty')
    }
}
addAndRemoveElements(['remove', 
'remove', 
'remove']


)