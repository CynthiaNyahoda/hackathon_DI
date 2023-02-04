let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');


setInterval(() =>{
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = hr >= 12 ? "PM" : "AM";
    
    if (hr > 12) {
        hr = hr -12
    }
    
    let hh = document.getElementById('hours')
    let mm = document.getElementById('minutes')
    let ss = document.getElementById('seconds')


    hr = (hr < 10) ? "0" + hr : hr
    min = (min < 10) ? "0" + min : min
    sec = ( sec < 10) ? "0" + sec : sec
    
    
    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * hr) / 12;
    mm.style.strokeDashoffset = 440 - (440 * min) / 60;
    ss.style.strokeDashoffset = 440 - (440 * sec) / 60;

})
