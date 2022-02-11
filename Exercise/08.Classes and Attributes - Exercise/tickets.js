function solve(arr, criteria){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }

    let result = [];

    for(let items of arr){
        let [destination, price, status] = items.split('|');
        price = Number(price);

        let tick = new Ticket(destination, price, status);
        result.push(tick);
    }

    if(criteria == 'destination'){
        return result.sort((a, b) => a.destination.localeCompare(b.destination));
    }else if(criteria == 'price'){
        return result.sort((a, b) => a.price - b.price);
    }else if(criteria == 'status'){
        return result.sort((a, b) => a.status.localeCompare(b.status));
    }
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))