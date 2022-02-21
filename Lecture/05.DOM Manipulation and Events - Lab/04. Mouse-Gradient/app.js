function attachGradientEvents() {

    const grad = document.getElementById('gradient');

    grad.addEventListener('mousemove', onBoard);

    function onBoard(ev) {
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);
        document.getElementById('result').textContent = `${offset}%`;
    }

}