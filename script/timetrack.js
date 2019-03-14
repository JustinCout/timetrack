window.onload = function pageLoad() {

    //Buttons
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let saveBtn = document.getElementById('save');
    let resetBtn = document.getElementById('reset');

    //Timer
    let timer = document.getElementById('timer');

    //Time values 
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function stopWatch() {
        seconds++;

        if (seconds / 60 === 0) {
            seconds = 0;
            minutes++;

            if (minutes / 60 === 0) {
                minutes = 0;
                hours++;
            }
        }

        timer.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    stopWatch();


















}
pageLoad();