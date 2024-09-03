const watch = document.getElementById("watch");
const button = document.querySelector("#buttons");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let int = null;

const start = document.createElement("button");
start.textContent = "START";

const stop = document.createElement("button");
stop.textContent = "STOP";

const reset = document.createElement("button");
reset.textContent = "RESET";

button.append(start, stop, reset);

start.addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
        int = null;
    } else {
        int = setInterval(displayTimer, 10);
    }
});

stop.addEventListener("click", () => {
    clearInterval(int);
    int = null;
});

reset.addEventListener("click", () => {
    clearInterval(int);
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    watch.textContent = '00:00:00';
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = Math.floor(milliseconds / 10);  

    ms = ms < 10 ? "0" + ms : ms;

    watch.textContent = `${h}:${m}:${s}:${ms}`;
}
