function solve(e) {
   //Todo: Write your code here!

   const inputCreator = document.getElementById('creator');
   const inputTitle = document.getElementById('title');
   const inputCategory = document.getElementById('category');
   const inputText = document.getElementById('content');
   const createBtn = document.getElementsByClassName('btn create');

   createBtn[0].addEventListener('click', addPost);

   function addPost(e) {
      e.preventDefault();
      const postArea = document.querySelector('.site-content main section');
      const article = document.createElement('article')
      const creator= inputCreator.value
      const category= inputCategory.value
      const title= inputTitle.value
      const text = inputText.value
      article.innerHTML = `
                              <h1>${title}</h1>
                              <p>Category:
                                 <strong>${category}</strong>
                              </p>
                              <p>Creator:
                                 <strong>${creator}</strong>
                              </p>
                              <p>${text}</p>
                              <div class="buttons">
                                 <button class="btn delete">Delete</button>
                                 <button class="btn archive">Archive</button>
                              </div>
                            `
      postArea.appendChild(article);

      const buttons = article.querySelectorAll('button')
      //const deleteBtn = document.getElementsByClassName('btn delete')[0];
      //const archiveBtn = document.getElementsByClassName('btn archive')[0];

      buttons[0].addEventListener('click', deleteHandler);
      buttons[1].addEventListener('click', archiveHandler);

      inputCreator.value = '';
      inputCategory.value = '';
      inputTitle.value = '';
      inputText.value = '';
   }
   
   function archiveHandler(e){
      const archiveSection = document.querySelector('.archive-section ol');
      const t = e.target.parentElement.parentElement.querySelector('h1').textContent;
      const title = document.querySelectorAll('h1')[1].textContent;
      const list = document.createElement('li');
      list.textContent = t;

      const articl = e.target.parentElement.parentElement;
      
      archiveSection.appendChild(list);

      Array.from(archiveSection).sort((a, b) => a.localeCompare(b));
      
      e.target.parentElement.parentElement.parentElement.removeChild(articl);
   }
   
   function deleteHandler(e){
      const deleted = e.target.parentElement.parentElement;

      e.target.parentElement.parentElement.parentElement.removeChild(deleted);
   }
}
