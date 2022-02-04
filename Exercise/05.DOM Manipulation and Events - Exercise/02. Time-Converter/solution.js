function attachEventsListeners() {

    const test = {
        day: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit){
        let inDays = value / test[unit];

        return {
        day: inDays,
        hours: inDays * test.hours,
        minutes: inDays * test.minutes,
        seconds: inDays * test.seconds
        }
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', converter);
    document.getElementById('hoursBtn').addEventListener('click', converter);
    document.getElementById('minutesBtn').addEventListener('click', converter);
    document.getElementById('secondsBtn').addEventListener('click', converter);

    function converter(e){
        const input = e.target.parentElement.querySelector('input[type="text"]');

        const time = convert(Number(input.value), input.id);
        daysInput.value = time.day;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondInput.value = time.seconds;
    }
}