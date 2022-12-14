// ============= get DOM elements ==============
const hourEl = document.getElementById("hour");
const minuteEl= document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm')

// ====================== a function to read computer time and display on the DOM elements ======================
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes()
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){h=h-12; ampm="PM";}

    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;


    // Call the function recursively
    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();
