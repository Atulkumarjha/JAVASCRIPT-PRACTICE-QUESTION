//CREATE A COUNTDOWN TIMER USING SETINTERVAL FUNCTION. IT START FROM 60 SECONDS AND WHEN IT REACHS 00 ALERT WITH ALERT BOX
const timerElement = document.getElementById('timer');

let countdownSeconds = 60;

function updateTimerDisplay(){
    const minutes = Math.floor(countdownSeconds / 60);
    const seconds = countdownSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    timerElement.textContent = formattedTime;
}



function countdown(){
    if(countdownSeconds>0){
        countdownSeconds --;
        updateTimerDisplay();
    }else{
        alert('Countdown has ended');
        clearInterval(countdown);
    }
}


   const timerInterval =  setInterval(countdown, 1000);


