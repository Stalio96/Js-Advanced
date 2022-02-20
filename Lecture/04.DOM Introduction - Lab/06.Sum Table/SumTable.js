function sumTable() {

    const cols = document.querySelectorAll('table tr');

    let sum = 0;

    for(let i = 1; i < cols.length-1; i++){
        sum += Number(cols[i].lastElementChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}