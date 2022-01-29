function solve() {
  //TODO...
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  let splitted = text.split(' ');
  let result = '';

  if (convention == "Camel Case") {
    result = splitted[0].toLowerCase()
    for (let i = 1; i < splitted.length; i++) {
      let others = splitted[i].slice(1).toLowerCase();
      let firstLet = splitted[i][0].toUpperCase();

      result += firstLet + others;
    }
    document.getElementById('result').textContent = result;
  } else if (convention == "Pascal Case") {
    for (let i = 0; i < splitted.length; i++) {
      let others = splitted[i].slice(1).toLowerCase();
      let firstLet = splitted[i][0].toUpperCase();

      result += firstLet + others;
    }
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}