const enddate = "07 Feb 2030 12:00 pm"
document.getElementById("end-date").innerHTML = enddate;
const input = document.querySelectorAll("input")

function clock(){
    const comming = new Date(enddate)
    const today = new Date()
    const diff = (comming - today)/1000;

    if(diff < 0) return;

    console.log(diff);      /* in mili-second convert second by dividation on 1000 */
    input[0].value = (Math.floor(diff/3600/24));
    input[1].value = (Math.floor((diff/3600)%24));
    input[2].value = (Math.floor((diff/60)%60));
    input[3].value = (Math.floor(diff%60));
}
clock() /* Initial call */

/* function made for call function every second..
    /* arrow function, SetInterval function, arrow function */

setInterval(       
    () => {
        clock()
    },
    1000
)