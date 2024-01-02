let[second, minutes, hours, milisec] = [0,0,0,0]
let displaytime = document.getElementById("displaytime");
timmer = null

function stopwatch(){
    milisec++
    if(milisec ==100){
        milisec = 0
        second++;
        if(second == 60){
            second = 0
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
        }
    }
}
    let h = hours<10 ? "0"+hours : hours;
    let m = minutes<10 ? "0"+minutes : minutes;
    let s = second<10 ? "0"+second : second;
    let ml = milisec<10 ? "0"+milisec : milisec;

    displaytime.innerHTML = h+":"+m+":"+s+":"+ml;
}
function watchstart(){
    if(timmer!=null){
        clearInterval(timmer);
    }
    timmer = setInterval(stopwatch,10);
}

    function watchstop(){
        clearInterval(timmer);
    }

    function watchreset(){
        clearInterval(timmer);
        [second, minutes, hours,milisec] = [0,0,0,0];
        displaytime.innerHTML = "00:00:00:00";
    }
