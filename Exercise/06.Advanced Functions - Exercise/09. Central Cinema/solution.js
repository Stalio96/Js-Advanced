function solve() {
    // TODO
    const contain = document.querySelector('#container button');
    contain.addEventListener('click', addMovie);
    const movieSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector("#archive ul");

    function addMovie(e){
        e.preventDefault();

        const nameMovie = e.target.parentElement.querySelectorAll('input')[0].value;
        const hallMovie = e.target.parentElement.querySelectorAll('input')[1].value;
        const priceMovie = e.target.parentElement.querySelectorAll('input')[2].value;
        
        if(nameMovie != '' && hallMovie != '' && priceMovie != '' && !isNaN(priceMovie)){
            let movie = document.createElement('li');

            movie.innerHTML = 
                `<span>${nameMovie}</span>
                <strong>${hallMovie}</strong>
                <div>
                  <strong>${priceMovie}</strong>
                  <input placeholder="Tickets Sold">
                  <button>Archive</button>
                </div>`;

            moviesSection.appendChild(movie);

            const section = movie.querySelector('div button');
            section.addEventListener('click', onScreen);

            e.target.parentElement.querySelectorAll('input')[0].value = '';
            e.target.parentElement.querySelectorAll('input')[1].value = '';
            e.target.parentElement.querySelectorAll('input')[2].value = '';
        }
    }


    function onScreen(e){
        const nameM = e.target.parentElement.parentElement.querySelector('span').textContent;
        const pric = e.target.parentElement.querySelector('strong').textContent;
        const numTick = e.target.parentElement.querySelector('input').value;
        let price = Number(numTick) * Number(pric);

        if(nameM != '' && !isNaN(numTick)){
            let archive = document.createElement('li');
    
            archive.innerHTML = 
                `<span>${nameM}</span>
                <strong>Total amount:${price}</strong>
                <button>Delete</button>`
            
                
            const section2 = archive.querySelector('button');
            section2.addEventListener('click', onDelete);
            archiveSection.appendChild(archive);
        }

        e.target.parentElement.parentElement.remove();
    }

    function onDelete(e){
        e.target.parentElement.remove();
    }
}