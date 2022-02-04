function solve() {

  const body = document.querySelector('tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));


  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {

    const data = JSON.parse(input.value);

    for (let items of data) {
      const row = document.createElement('tr');

      const imgCell = document.createElement('td');
      const prodCell = document.createElement('td');
      const priceCell = document.createElement('td');
      const defactorCell = document.createElement('td');
      const checkBoxCell = document.createElement('td');

      const imgP = document.createElement('img');
      imgP.src = items.img;
      imgCell.appendChild(imgP);

      const prodP = document.createElement('p');
      prodP.textContent = items.name;
      prodCell.appendChild(prodP);

      const priceP = document.createElement('p');
      priceP.textContent = items.price;
      priceCell.appendChild(priceP);

      const defactorP = document.createElement('p');
      defactorP.textContent = items.decFactor;
      defactorCell.appendChild(defactorP);

      const checkBoxP = document.createElement('input');
      checkBoxP.type = 'checkbox';
      checkBoxCell.appendChild(checkBoxP);

      row.appendChild(imgCell);
      row.appendChild(prodCell);
      row.appendChild(priceCell);
      row.appendChild(defactorCell);
      row.appendChild(checkBoxCell);
      body.appendChild(row);
    }
  }

  function buy(e) {
    const allChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }));

      console.log(allChecked)

    let products = [];
    let totalPrice = 0;
    let avgDecF = 0;

    for (let box of allChecked) {
      products.push(box.name);
      totalPrice += box.price;
      avgDecF += box.decFactor;
    }

    let result = `Bought furniture: ${products.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${avgDecF / allChecked.length}`;

    output.value = result;
  }
  //TODO...
}