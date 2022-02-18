function townPopulation(array){

    let city = {};

    for(let town of array){
        let tokens = town.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);
        if(city[name] == undefined){
            city[name] = population;
        }else{
            city[name] += population;
        }
    }

    for(let [name, pop] of Object.entries(city)){
        console.log(`${name} : ${pop}`)
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)