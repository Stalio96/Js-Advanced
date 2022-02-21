function deleteByEmail() {

    const emali = document.querySelector('input[name="email"]').value;

    const table = Array.from(document.querySelector('tbody').children);

    let count = 0;

    for (let rows of table) {
        if (rows.children[1].textContent == emali) {
            rows.remove();
            count++;
        }
    }

    if (count > 0) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}