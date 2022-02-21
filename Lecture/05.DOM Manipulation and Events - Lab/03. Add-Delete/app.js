function addItem() {
    const text = document.getElementById('newItemText').value;

    const ref = document.createElement('li');
    ref.textContent = text;
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';

    button.addEventListener('click', onClick);

    function onClick() {
        ref.remove();
    }

    ref.appendChild(button);

    document.getElementById('items').appendChild(ref);
    document.getElementById('newItemText').value = '';

}