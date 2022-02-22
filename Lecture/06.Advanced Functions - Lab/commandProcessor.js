function solution(){

    let str = '';

    return {
        append: (x) => str = str + x,
        removeStart: (r) => str = str.slice(r),
        removeEnd: (e) => str = str.slice(0, -e),
        print: () => console.log(str)
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
