window.addEventListener('load', solve);

function solve() {
    //TO DO
    let totalMoney = 0;
    const infoBody = document.getElementById('furniture-list');
    const total = document.querySelector('.total-price');

    const fieldModel = document.getElementById('model');
    const fieldYear = document.getElementById('year');
    const fieldDesc = document.getElementById('description');
    const fieldPrice = document.getElementById('price');
    const fieldBtn = document.getElementById('add');

    fieldBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();
        const year = Number(fieldYear.value);
        const price = Number(fieldPrice.value)
        if (fieldModel.value != '' && fieldDesc.value != '' && year > 0 && price > 0) {
            const tr = document.createElement('tr');
            tr.classList.add('info');

            tr.innerHTML = `<td>${fieldModel.value}</td><td>${price.toFixed(2)}</td>
            <td>
            <button class="moreBtn">More Info</button>
            <button class="buyBtn">Buy it</button>
            </td>`;

            const hiddenTr = document.createElement('tr');
            hiddenTr.classList.add('hide');
            hiddenTr.innerHTML = `
            <td>Year: ${year}</td>
            <td colspan="3">Description: ${fieldDesc.value}</td>
            `;

            infoBody.appendChild(tr);
            infoBody.appendChild(hiddenTr);

            const moreInfoBtn = tr.querySelectorAll('button');

            moreInfoBtn[0].addEventListener('click', moreInformation);
            moreInfoBtn[1].addEventListener('click', buyIt);
        }

        fieldModel.value = '';
        fieldYear.value = '';
        fieldDesc.value = '';
        fieldPrice.value = '';
        fieldBtn.value = '';

        function moreInformation(e){
            const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
            if(e.target.textContent == 'More Info'){
                e.target.textContent = 'Less Info';
                moreInfoTr.style.display = 'contents';
            }else {
                e.target.textContent = 'More Info ';
                moreInfoTr.style.display = 'none';
            }
        }

        function buyIt(e){
            const tbR = e.target.parentElement.parentElement;
            const hid = tbR.nextElementSibling;
            
            tbR.parentElement.removeChild(tbR);

            const furPrice = Number(tbR.querySelectorAll('td')[1].textContent);
            total.textContent = (Number(total.textContent) + furPrice).toFixed(2);

            hid.parentElement.removeChild(hid);
        }

    }

}
