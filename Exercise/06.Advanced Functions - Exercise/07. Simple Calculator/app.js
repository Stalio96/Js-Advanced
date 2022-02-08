function calculator() {
    // TODO:
    let firstInput;
    let secondInput;
    let resulInput;

    function init(selector1, selector2, resulSelector){
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        resulInput = document.querySelector(resulSelector);
    }

    function add(){
        resulInput.value = Number(firstInput.value) + Number(secondInput.value);

        return resulInput;
    }

    function subtract(){
        resulInput.value = Number(firstInput.value) - Number(secondInput.value);

        return resulInput;
    }

    return {
        init,
        add,
        subtract
    }

}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



