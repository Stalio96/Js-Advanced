function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      const table = Array.from(document.querySelectorAll('tbody tr'));
      const button = document.getElementById('searchField').value;

      for(let i = 0; i < table.length; i++){
         for(let j = 0; j < 3; j++){
            let el = table[i].textContent;
            if(el.includes(button)){
               table[i].classList.add('select');
            }else{
               table[i].classList.remove('select');
            }
         }
      }
   }
}