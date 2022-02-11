class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length){
        this.innerLength += length;
    }
    
    decrease(length){
        this.innerLength -= length;
    }
    
    toString(){
        if(this.innerLength < 0){
            this.innerLength = 0;
            let sliced = '...';
            return sliced;
        }
        if(this.innerLength <= this.innerString.length){
            let sliced = this.innerString.slice(0, this.innerLength) + '...';
            return sliced;
        }else {
            let sliced = this.innerString.slice(0, this.innerLength);
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
