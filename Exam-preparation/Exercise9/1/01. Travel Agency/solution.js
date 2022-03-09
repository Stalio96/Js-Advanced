window.addEventListener('load', solution);

function solution(e) {
  const fullName = document.getElementById('fname');
  const email = document.getElementById('email');
  const phoneNum = document.getElementById('phone');
  const adress = document.getElementById('address');
  const postCode = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');

  const preview = document.getElementById('infoPreview');

  submitBtn.addEventListener('click', submit);

  function submit(e) {
    if (fullName.value != '' && email.value != '') {
      submitBtn.disabled = true;

      const name = fullName.value;
      const emal= email.value;
      const phone = phoneNum.value;
      const add = adress.value;
      const post = postCode.value;

      const liName = document.createElement('li');
      liName.textContent = `Full Name: ${fullName.value}`;
      const liEmail = document.createElement('li');
      liEmail.textContent = `Email: ${email.value}`;
      const liPhone = document.createElement('li');
      liPhone.textContent = `Phone Number: ${phoneNum.value}`;
      const liAddress = document.createElement('li');
      liAddress.textContent = `Address: ${adress.value}`;
      const liCode = document.createElement('li');
      liCode.textContent = `Postal Code: ${postCode.value}`;

      preview.appendChild(liName);
      preview.appendChild(liEmail);
      preview.appendChild(liPhone);
      preview.appendChild(liAddress);
      preview.appendChild(liCode);

      fullName.value = '';
      email.value = '';
      phoneNum.value = '';
      adress.value = '';
      postCode.value = '';

      const editBtn = document.getElementById('editBTN');
      editBtn.disabled = false;
      editBtn.addEventListener('click', () => {
        fullName.value = name;
        email.value = emal;
        phoneNum.value = phone;
        adress.value = add;
        postCode.value = post;

        liName.remove()
        liEmail.remove()
        liPhone.remove()
        liAddress.remove()
        liCode.remove()

        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
      })
      const continueBtn = document.getElementById('continueBTN');
      continueBtn.disabled = false;
      continueBtn.addEventListener('click', () => {
        const h3 = document.createElement('h3');
        h3.textContent = `Thank you for your reservation!`

        const divBlock = document.getElementById('block');

        divBlock.innerHTML = '';

        divBlock.appendChild(h3)
      })
    }
  }
}
