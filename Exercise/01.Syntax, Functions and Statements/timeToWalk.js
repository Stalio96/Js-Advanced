function timeToWalk(steps, footprint, speed){

    let kilometers = steps * footprint;
    let meterspeed = speed / 3.6;

    let seconds = Math.floor(kilometers / meterspeed);

    let minutes = seconds / 60;

    let plusMin = Math.floor(kilometers / 500);

    minutes += plusMin;

    //console.log(`${}:${}:${}`)
}
timeToWalk(2564, 0.70, 5.5)