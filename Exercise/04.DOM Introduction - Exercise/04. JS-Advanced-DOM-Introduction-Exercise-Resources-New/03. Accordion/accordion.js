function toggle() {

    const element = document.getElementsByClassName('button');
    const styls = document.getElementById('extra');
    if(element[0].textContent == 'More'){
        styls.style.display = 'block';
        element[0].textContent = 'Less';
    }else if(element[0].textContent == 'Less'){
        styls.style.display = 'none';
        element[0].textContent = 'More';
    }

    console.log('TODO:...');
}