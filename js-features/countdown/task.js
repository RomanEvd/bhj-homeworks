 let elementTimer = document.getElementById("timer");
 

let timerInterval = setInterval(() => {
    if (--elementTimer === 0) {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
        return elementTimer("timer");
    }
}, 1000);  