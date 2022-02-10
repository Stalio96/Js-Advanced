function validate() {
    // TODO
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', validator);

    function validator(){
        let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let emailValid = emailRegex.test(emailInput.value);

        if(emailValid){
            emailInput.classList.remove('error');
        }else {
            emailInput.classList.add('error');
        }
    }
}