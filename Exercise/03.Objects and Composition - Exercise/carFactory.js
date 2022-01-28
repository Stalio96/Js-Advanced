function carFactory(obj){

    const result = {};

    function engine(power){
        if(power <= 90){
            return {power: 90, volume: 1800};
        }else if(power <= 120){
            return {power: 120, volume: 2400};
        }else {
            return {power: 200, volume: 3500};
        }
    }

    let wheel = obj.wheelsize % 2 == 0 ? obj.wheelsize-1 : obj.wheelsize;
    let arr = [wheel, wheel, wheel, wheel];

    result.model = obj.model;
    result.engine = engine(obj.power);
    result.carriage = {type: obj.carriage, color: obj.color};
    result.wheels = arr;

    return result;
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))