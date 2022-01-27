function previousDay(year, month, day){

    let event = year + '-' + month + '-' + day;

    let date = new Date(event)

    date.setDate(day-1);

    console.log(date.getFullYear()+`-`+Number(date.getMonth()+1)+`-`+date.getDate())
}
previousDay(2016, 10, 1)