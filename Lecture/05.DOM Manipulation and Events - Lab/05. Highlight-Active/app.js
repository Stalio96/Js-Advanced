function focused() {
    
    const divs = Array.from(document.getElementsByTagName('input'));

    for(let div of divs){
        div.addEventListener('focus', onFocus);
        div.addEventListener('blur', onBlur)
    }

    function onFocus(ev){
        ev.target.parentNode.className = 'focused';
    }
    
    function onBlur(ev){
        ev.target.parentNode.className = '';
    }
}