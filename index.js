const time = 5000
const audio = new Audio('./alarm.mp3');

const clock = {
    'hours' : 0,
    'minutes' : 0,
    'seconds' : 0
}

window.onload = function () {
    // window.onload se déclanche automatiquement une fois que la page est chargée
    // Si on tente d'accéder au bouton dès le début il n'a pas eu le temps de se charger
    // Et il par conséquent il nous retourne null
    // https://stackoverflow.com/questions/1829925/javascript-getelementbyid-not-working
    stopButton = document.getElementById('stopAlarm');
    htmlContainer = document.getElementById('container');
    hoursDiv = document.getElementById('hours');
    minutesDiv = document.getElementById('minutes');
    secondsDiv = document.getElementById('seconds');
}

function startTimer() {
    setTimeout(alarm , time);
    timer = setInterval(increaseClock, 1000);
}

const alarm = function() {
    document.title = 'Il est l\'heure';
    // audio.play();
    console.log('driiiiiiiing');
    stopButton.removeAttribute('disabled');
    htmlContainer.style.backgroundColor = "tomato";
}

function stopAlarm() {
    audio.pause();
    stopButton.setAttribute('disabled', true);
    htmlContainer.style.backgroundColor = "white";
    clearInterval(timer);
}


function increaseClock() {
    clock.seconds ++;

    if (clock.seconds === 60) {
        clock.minutes++
        clock.seconds = 0;
    }

    if (clock.minutes === 60) {
        clock.hours++
        clock.minutes = 0;
    }
    
    updateClock();
}

function resetClock() {
    clock.hours = 0;
    clock.minutes = 0;
    clock.seconds = 0;
    updateClock();
}

 function updateClock() {
    hoursDiv.innerHTML = clock.hours;
    minutesDiv.innerHTML = clock.minutes;
    secondsDiv.innerHTML = clock.seconds;
 }