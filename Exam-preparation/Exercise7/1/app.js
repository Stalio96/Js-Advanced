function solution() {
    //TO DOfunction solution() {
    //TO DO

    const input = document.querySelector('.card div input');
    const inputBtn = document.querySelector('.card div button');

    inputBtn.addEventListener('click', addGift);

    function addGift(e) {
        const unsorted = document.querySelectorAll('.card')[1].querySelector('ul');
        const liElement = document.createElement('li');
        liElement.classList.add("gift");

        let btnSendElement = document.createElement('button');
        btnSendElement.setAttribute('id', 'sendButton');
        btnSendElement.textContent = 'Send';
        let btnDiscardElement = document.createElement('button');
        btnDiscardElement.setAttribute('id', 'discardButton');
        btnDiscardElement.textContent = 'Discard';

        liElement.textContent = input.value;

        liElement.appendChild(btnSendElement);
        liElement.appendChild(btnDiscardElement);

        
        unsorted.appendChild(liElement);
        
       

        input.value = '';
        
        let allElements = Array.from(unsorted.querySelectorAll('li'));
        let sortedElement = allElements.sort((a, b) => a.textContent.localeCompare(b.textContent))
        
        while (unsorted.firstChild) {
            unsorted.firstChild.remove();
        }
        
        for (let element of sortedElement) {
            unsorted.appendChild(element)
        }
        
        
        btnSendElement.addEventListener('click', e => {
            const sentSection = document.querySelectorAll('.container section')[2].querySelector('ul');
            btnDiscardElement.remove();
            e.target.remove();
            sentSection.appendChild(liElement);
        });
        btnDiscardElement.addEventListener('click', e => {
            const discardSection = document.querySelectorAll('.container section')[3].querySelector('ul');
            btnSendElement.remove()
            e.target.remove();
            discardSection.appendChild(liElement);
        });
    }
}
