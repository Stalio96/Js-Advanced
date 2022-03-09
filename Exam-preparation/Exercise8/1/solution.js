function addDestination(){

    const inputCity = document.querySelector('#input').querySelectorAll('.inputData')[0];
    const inputCountry = document.querySelector('#input').querySelectorAll('.inputData')[1];
    const inputSeason = document.getElementById('seasons');

    const destinationList = document.getElementById('destinationsList');
    
    if(inputCity.value != '' && inputCountry.value != ''){
        const tr = document.createElement('tr');
        const tdDestination = document.createElement('td');
        tdDestination.textContent = `${inputCity.value}, ${inputCountry.value}`;
        const tdSeason = document.createElement('td');  
        
        if(inputSeason.value == 'summer'){
            let summer = document.getElementById('summer');
            summer.value = Number(summer.value);
            summer.value++;
            tdSeason.textContent = `Summer`;
        }else if(inputSeason.value == 'autumn'){
            let autumn =  document.getElementById('autumn');
            autumn.value = Number(autumn.value);
            autumn.value++;
            tdSeason.textContent = `Autumn`;
        }else if(inputSeason.value == 'winter'){
            let winter = document.getElementById('winter');
            winter.value = Number(winter.value);
            winter.value++;
            tdSeason.textContent = `Winter`;
        }else if(inputSeason.value == 'spring'){
            let spring = document.getElementById('spring');
            spring.value = Number(spring.value);
            spring.value++;
            tdSeason.textContent = `Spring`;
        }
        tr.appendChild(tdDestination);
        tr.appendChild(tdSeason);

        destinationList.appendChild(tr);

        inputCity.value = '';
        inputCountry.value = '';
        inputSeason.value = '';
    }
}