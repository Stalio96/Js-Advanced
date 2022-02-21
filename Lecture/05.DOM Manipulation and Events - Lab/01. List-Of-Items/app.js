function addItem() {
    const ref = document.createElement('li');
    const text = document.getElementById('newItemText').value;
    ref.textContent = text;
    document.getElementById('items').appendChild(ref);
    document.getElementById('newItemText').value = '';
}