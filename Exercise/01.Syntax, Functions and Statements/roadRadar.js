function roadRadar(limit, area){

    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;
    
    if(area == 'motorway'){
        let difference = limit - motorwaySpeed
        if(limit <= motorwaySpeed){
            console.log(`Driving ${limit} km/h in a ${motorwaySpeed} zone`);
        }else if(limit - motorwaySpeed <= 20){
            let status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`)
        }else if(limit - motorwaySpeed <= 40){
            let status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`)
        }else {
            let status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`)
        }
    }else if(area == 'interstate'){
        let difference = limit - interstateSpeed
        if(limit <= interstateSpeed){
            console.log(`Driving ${limit} km/h in a ${interstateSpeed} zone`);
        }else if(limit - interstateSpeed <= 20){
            let status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`)
        }else if(limit - interstateSpeed <= 40){
            let status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`)
        }else {
            let status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`)
        }
    }else if(area == 'city'){
        let difference = limit - citySpeed
        if(limit <= citySpeed){
            console.log(`Driving ${limit} km/h in a ${citySpeed} zone`);
        }else if(limit - citySpeed <= 20){
            let status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${status}`)
        }else if(limit - citySpeed <= 40){
            let status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${status}`)
        }else {
            let status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${status}`)
        }
    }else if(area == 'residential'){
        let difference = limit - residentialSpeed
        if(limit <= residentialSpeed){
            console.log(`Driving ${limit} km/h in a ${residentialSpeed} zone`);
        }else if(limit - residentialSpeed <= 20){
            let status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`)
        }else if(limit - residentialSpeed <= 40){
            let status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`)
        }else {
            let status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`)
        }
    }
}
roadRadar(200, 'motorway')