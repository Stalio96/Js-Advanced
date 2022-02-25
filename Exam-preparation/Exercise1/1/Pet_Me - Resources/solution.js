function solve() {

    const fields = document.querySelectorAll('#container input');
    const fieldBtn = document.querySelector('#container button');
    const adoptionFild = document.querySelector('#adoption ul');
    const adoptedF = document.querySelector('#adopted ul');

    fieldBtn.addEventListener('click', adoption);

    function adoption(event) {
        event.preventDefault();

        const name = fields[0].value.trim();
        const age = Number(fields[1].value.trim());
        const kind = fields[2].value.trim();
        const owner = fields[3].value.trim();

        if (name == '' || age == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        const conactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind),
            ),
            e('span', {}, `Owner: ${owner}`),
            conactBtn
        );

        conactBtn.addEventListener('click', contact);

        adoptionFild.appendChild(pet);

        fields[0].value = '';
        fields[1].value = '';
        fields[2].value = '';
        fields[3].value = '';

        function contact() {
            const confInput = e('input', { placeholder: 'Enter your names' });
            const confBtn = e('button', {}, 'Yes! I take it!');
            const confirmationDiv = e('div', {},
                confInput,
                confBtn
            );

            confBtn.addEventListener('click', adopt.bind(null, confInput, pet));

            conactBtn.remove();
            pet.appendChild(confirmationDiv);
        }
    }

    function adopt(input, pet){
        const newOwner = input.value.trim();

        if(newOwner == ''){
            return;
        }

        const checkBtn = e('button', {}, 'Checked');

        pet.querySelector('div').remove();

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        pet.appendChild(checkBtn);

        adoptedF.appendChild(pet);

        checkBtn.addEventListener('click', checked.bind(null, pet));
    }

    function checked(pet){
        pet.remove();
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}