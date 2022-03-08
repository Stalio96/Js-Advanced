function solve() {

    const inputTask = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDate = document.getElementById('date');
    const addBtn = document.getElementById('add');

    const openDiv = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const inProgress = document.getElementById('in-progress');
    const complete = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    addBtn.addEventListener('click', addTask);

    function addTask(e){
        e.preventDefault();

        if(inputTask.value != '' && inputDescription.value != '' && inputDate.value != ''){
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.textContent = inputTask.value;
            const para = document.createElement('p');
            para.textContent = `Description: ${inputDescription.value}`;
            const paraDate = document.createElement('p');
            paraDate.textContent = `Due Date: ${inputDate.value}`;

            const div = document.createElement('div');
            div.classList.add('flex');
            const startb = document.createElement('button');
            startb.classList.add('green');
            startb.textContent = 'Start'
            const deleteb = document.createElement('button');
            deleteb.classList.add('red');
            deleteb.textContent = 'Delete';

            div.appendChild(startb);
            div.appendChild(deleteb);
            article.appendChild(h3);
            article.appendChild(para);
            article.appendChild(paraDate);
            article.appendChild(div);

            openDiv.appendChild(article);

            inputTask.value = '';
            inputDescription.value = '';
            inputDate.value = '';

            startb.addEventListener('click', () => {
                inProgress.appendChild(article);
                startb.classList.remove('green');
                startb.classList.add('red');
                startb.textContent = 'Delete';

                deleteb.classList.remove('red');
                deleteb.classList.add('orange');
                deleteb.textContent = 'Finish';

                startb.addEventListener('click', () => {
                    article.remove();
                });

                deleteb.addEventListener('click', () => {
                    complete.appendChild(article);
                    div.remove();
                })
            });

            deleteb.addEventListener('click', () => {
                article.remove()
            });
        }
    }
}