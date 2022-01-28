function townsToJSON(arr){

    let result = [];

    let tokens = arr[0].split('|');
    let town = tokens[1].trim();
    let latitude = tokens[2].trim();
    let longitude = tokens[3].trim(); 

    for(let i = 1; i < arr.length; i++){
        const obj = {};
        let splited = arr[i].split('|');
        obj[town] = splited[1].trim();
        obj[latitude] = Number(Number(splited[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splited[3].trim()).toFixed(2));

        result.push(obj);
    }

    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)