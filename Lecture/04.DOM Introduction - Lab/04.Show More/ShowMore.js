function showText() {
    // TODO
    const read = document.getElementById('more');
    const text = document.getElementById('text');
    text.style.display = 'inline';
    read.style.display = 'none';
    read.textContent = text.textContent;
}