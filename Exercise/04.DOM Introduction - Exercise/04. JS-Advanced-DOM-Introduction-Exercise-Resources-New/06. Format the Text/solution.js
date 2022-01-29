function solve() {
  //TODO

  const embeded = document.getElementById('input').value;
  const splitted = embeded.split('.').filter(el => el != '');
  const output = document.getElementById('output');
  let counter = 0;
  let result = '';
  let lastResult = '';
  
  for(let i = 0; i < splitted.length; i+=3){
    let arr = [];
    for(let j = 0; j < 3; j++){
      if(splitted[i + j]){
        arr.push(splitted[i + j])
      }
    }
    let para = arr.join('. ') + '.';
    
    output.innerHTML += `<p>${para}</p>`;
  }
}