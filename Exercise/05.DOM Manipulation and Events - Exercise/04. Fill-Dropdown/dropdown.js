function addItem() {

    const selectMenu = document.getElementById('menu');
    const button = document.querySelector('input[type="button"]');
    const textCont = document.getElementById('newItemText');
    const txtValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.text = textCont.value;
    option.value = txtValue.value;

    selectMenu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = ''
}