function solution(a){

    let b = a;

    function plus(){
        let c = b;
        return c + b;
    }

    return plus;
}

let add5 = solution(5);
console.log(add5(3));
console.log(add5(2));
