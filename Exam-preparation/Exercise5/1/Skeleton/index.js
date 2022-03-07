function solve(e) {
    
    const lectureName = document.getElementsByName('lecture-name')[0];
    const lectureDate = document.getElementsByName('lecture-date')[0];
    const lectureModule = document.getElementsByName('lecture-module')[0];
    const addBtn = document.querySelector('.form-control button');
    let modules = [];
    
    const trainigsArea = document.querySelector('.modules');

    addBtn.addEventListener('click', addLec);

    function addLec(e){
        e.preventDefault();

        if(lectureName.value != '' && lectureDate.value != '' && lectureModule.value != 'Select module...'){
            
            const divElement = document.createElement('div');
            divElement.classList.add('module');

            const h3 = document.createElement('h3');
            h3.textContent = lectureModule.value.toUpperCase() + '-MODULE';

            const unsotredList = document.createElement('ul');

            const liElement = document.createElement('li');
            liElement.classList.add('flex');
            const h4 = document.createElement('h4');
            h4.textContent = lectureDate.value;

            const delButton = document.createElement('button');
            delButton.classList.add('red');
            delButton.textContent = 'Del';

            
            liElement.appendChild(h4);
            liElement.appendChild(delButton);

            if(modules.includes(lectureModule.value)){
                let training = Array.from(document.querySelectorAll('.module'))
            }else{
                unsotredList.appendChild(liElement);
                divElement.appendChild(h3);
                divElement.appendChild(unsotredList);
                trainigsArea.appendChild(divElement);
                modules.push(lectureModule.value);
            }
            
            delButton.addEventListener('click', () => {
                
            })
        }
    }
};