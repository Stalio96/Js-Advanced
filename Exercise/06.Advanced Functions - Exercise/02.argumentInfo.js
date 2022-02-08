function argumentInfo(...arr) {

    const type = {
        string: [],
        number: [],
        function: []
    };

    for (let item of arr) {
        if (typeof item == 'string') {
            type.string.push(item)
        } else if (typeof item == 'number') {
            type.number.push(item)
        } else if (typeof item == 'function') {
            type.function.push(item)
        }
    }

    for (let [item, value] of Object.entries(type)) {
        for(let val of value){
            console.log(`${typeof val}: ${value}`)
        }
    }

    let sorted = Object.entries(type).sort((a, b) => b[1].length - a[1].length);

    for(let it of sorted){
        console.log(`${it[0]}: ${it[1].length}`)
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })