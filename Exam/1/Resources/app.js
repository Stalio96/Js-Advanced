window.addEventListener('load', solve);

function solve() {
    //TODO

    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    const divContainer = document.querySelector('.all-hits-container');
    const divSave = document.querySelector('.saved-container');

    let like = 0;
    addBtn.addEventListener('click', addCollection);

    function addCollection(e) {
        e.preventDefault();
        const likes = document.getElementById('total-likes').querySelector('.likes p');
        if (genreInput.value != '' && nameInput.value != '' && authorInput.value != '' && dateInput.value != '') {
            const divHits = document.createElement('div');
            divHits.classList.add('hits-info');

            const img = document.createElement('img');
            img.src = "./static/img/img.png";

            const h2Gen = document.createElement('h2');
            h2Gen.textContent = `Genre: ${genreInput.value}`;

            const h2name = document.createElement('h2');
            h2name.textContent = `Name: ${nameInput.value}`;

            const h2auth = document.createElement('h2');
            h2auth.textContent = `Author: ${authorInput.value}`;

            const h3date = document.createElement('h3');
            h3date.textContent = `Date: ${dateInput.value}`;

            const saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';

            const likeBtn = document.createElement('button');
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';

            const delBtn = document.createElement('button');
            delBtn.classList.add('delete-btn');
            delBtn.textContent = 'Delete';

            divHits.appendChild(img);
            divHits.appendChild(h2Gen);
            divHits.appendChild(h2name);
            divHits.appendChild(h2auth);
            divHits.appendChild(h3date);
            divHits.appendChild(saveBtn);
            divHits.appendChild(likeBtn);
            divHits.appendChild(delBtn);

            divContainer.appendChild(divHits);

            saveBtn.addEventListener('click', () => {
                divSave.appendChild(divHits);
                saveBtn.remove();
                likeBtn.remove();
            });
            likeBtn.addEventListener('click', () => {

                like += 1;
                likes.textContent = `Total Likes: ${like}`;

                likeBtn.disabled = true;
            });
            delBtn.addEventListener('click', () => {
                divHits.remove()
            })

            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';
        }
    }
}