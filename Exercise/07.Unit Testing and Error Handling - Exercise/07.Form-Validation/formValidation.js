function validate() {
    // TODO
    const submit = document.getElementById('submit');
    submit.addEventListener('click', validationFunc);
    const company = document.getElementById('company');
    company.addEventListener('change', companyInfoHandler);

    function validationFunc(e){
        e.preventDefault();
        const username = document.getElementById('username');
        const userRegex = /[a-zA-Z0-9]{3,20}/;
        const userValid = userRegex.test(username.value)
        valid(username, userValid)

        const email = document.getElementById('email');
        const emailRegex = /^.*\@.*\..*$/;
        const emailValid = emailRegex.test(email.value);
        valid(email, emailValid);

        const password = document.getElementById('password');
        const confPassword = document.getElementById('confirm-password');
        const passRegex = /\w{5,15}/;
        const passValid = passRegex.test(password.value);
        const confPValid = passRegex.test(confPassword.value);
        const passwordIsOk = passValid && confPValid && password.value == confPassword.value;
        valid(password, passwordIsOk);
        valid(confPassword, passwordIsOk);

        const isCompanyChecked = document.getElementById('company');
        if(isCompanyChecked.checked){
            const companyInput = document.getElementById('companyNumber');
            const companyValid = companyInput.value >= 1000 && companyInput.value <= 9999;
            valid(companyInput, companyValid);
        }

        const div = document.getElementById('valid');

        let mainInputValid = userValid && emailValid && passwordIsOk;
        let companyInputValid = !isCompanyChecked.checked || (isCompanyChecked.checked && companyValid);
        let itShouldValid = mainInputValid && companyInputValid;
        div.style.display = itShouldValid ? 'block' : 'none';
        //if(userValid && emailValid && passwordIsOk && !isCompanyChecked.checked){
        //    div.style.display = 'block';
        //}else if(userValid && emailValid && passwordIsOk && isCompanyChecked.checked && companyValid){
        //    div.style.display = 'block';
        //}else {
        //    div.style.display = 'none';
        //}
    }

    function companyInfoHandler(e){
        const companyIn = document.getElementById('companyInfo');
        companyIn.style.display = e.target.checked ? 'block' : 'none';
    }

    function valid(element, isValid){
        if(isValid){
            element.style.setProperty('border-color', 'none')
        }else{
            element.style.setProperty('border-color', 'red')
        }
    }
}
