function heroicInventory(arr){

    const heroes = [];

    for(let hero of arr){
        const obj = {};
        let [name, level, items] = hero.split(' / ');
        items = items ? items.split(', ') : [];
        
        obj.name = name;
        obj.level = Number(level);
        obj.items = items;

        heroes.push(obj);
    }
    console.log(JSON.stringify(heroes))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)