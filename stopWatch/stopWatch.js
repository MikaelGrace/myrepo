// targeting the DOM Elements
let divCover = document.querySelector("#container");
let continueButton = document.querySelector(".continue");
let divIntro = document.querySelector("#intro");
let timeTag = document.querySelector("#outputTime");
let yourTime = document.querySelector(".yourTime");

// creating DOM Elements
let timerPreset = document.createElement("h1");
let startButton = document.createElement("button");
let pauseButton = document.createElement("button");
let stopButton = document.createElement("button");
let resetButton = document.createElement("button");


// defining the buttons
startButton.innerHTML = "Start";
pauseButton.innerHTML = "Pause";
stopButton.innerHTML = "Stop";
resetButton.innerHTML = "Reset";

startButton.style.backgroundColor = "#2ecc71";
pauseButton.style.backgroundColor = "#e2e204";
stopButton.style.backgroundColor = "#d35400"
divCover.appendChild(timerPreset);




continueButton.addEventListener("click", () => {
    
    divIntro.style.display = "none";
    timerPreset.style.paddingTop = "100px";
    timerPreset.innerHTML = "00:00:00";

    

    divCover.appendChild(startButton);
    divCover.appendChild(pauseButton);
    divCover.appendChild(stopButton);
    divCover.appendChild(resetButton);

});

startButton.addEventListener("click", () => {
    startTimer();
});

pauseButton.addEventListener("click", () => {
    pauseTimer();
});

stopButton.addEventListener("click", () => {
    stopTimer();
})


// Defining timer values
let hour = 0;
let mins = 0;
let secs = 0;
let stopTime = true;



 function startTimer() {
     timeInterval = setInterval(timerCycle, 1000);
     timeInterval;
     timeTag.style.display = "none";
}

function pauseTimer() {
    clearInterval(timeInterval);
}

function stopTimer() {
    timeTag.style.display = "block";
    yourTime.innerHTML = timerPreset.textContent;
    clearInterval(timeInterval);
    timerPreset.innerHTML = "00:00:00";
    hour, mins, secs = 0;
}

/*
function timerCycle() {
    if(stopTime == false) {
        secs = parseInt(secs);
        mins = parseInt(mins);
        hour = parseInt(hour);

        secs++;

        if (secs == 60) {
            mins++;
            secs = 0
        }

        if (mins == 60) {
            hour++;
            mins = 0;
            secs = 0;
        }

        if (secs < 10) {
            secs = "0" + secs
        }

        if (mins < 10) {
            mins = "0" + mins;
        }

        if (hour < 10) {
            hour = "0" + hour;
        }

        timerPreset.innerHTML = hour + ":" + mins + ":" + secs;

       
    }
} */


function timerCycle() {
    hour = parseInt(hour);
    mins = parseInt(mins);
    secs = parseInt(secs);

    secs++;
    if(secs == 60) {
        mins++;
        secs = 0;
    }
    if(mins == 60) {
        hour++;
        mins = 0;
        secs = 0;
    }

    if (hour == 24) {
        hour = 0;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    timerPreset.innerHTML = hour + ":" + mins + ":" + secs;   
}













/*function watch() {
    let hours = 0;
    let mins = 0;
    let secs = 0;

    let timer = document.createElement("h1");
    let cover = document.querySelector("#container");
    timer.textContent = "This is a text";
    cover.appendChild(timer);


}

window.onload = function () {
    
    let newItem = document.querySelector("#intro");
    document.querySelector("button").addEventListener("click", () => {
        newItem.style.display = "none";
        watch();
    });
}
*/





