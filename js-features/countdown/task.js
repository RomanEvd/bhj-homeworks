let elemetTimer = document.getElementById("timer");

let timerInterval = setInterval(() => {
    if (--timer === 0) {
        return clearInterval(elemetTimer);
    }
   alert("Вы победили в конкурсе!");
}, 1000);