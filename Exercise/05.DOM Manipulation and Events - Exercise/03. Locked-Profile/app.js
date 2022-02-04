function lockedProfile() {
    
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e){
        let parent = e.target.parentElement;
        let locker = parent.querySelector('input[type="radio"][value="unlock"]').checked;
        const infoDif = Array.from(e.target.parentElement.querySelectorAll('div')).find(d => d.id.includes('HiddenFields'));

        if(locker){
            if(e.target.textContent == 'Show more'){
                e.target.textContent = 'Hide it';
                infoDif.style.display = 'block';
            }else{
                e.target.textContent = 'Show more';
                infoDif.style.display = '';
            }
        }
    }
}