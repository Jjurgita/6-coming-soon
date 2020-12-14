function timeCounter() {
    const date = new Date();
    const year = date.getFullYear();
    const nextYear = year + 1;
    // all date
    const nextYearDate = `${nextYear}-01-01 00:00:00`;
    const nextYearObject = new Date(nextYearDate);
    const nextYearMs = nextYearObject.getTime()
    // current time
    const timeMs = date.getTime();
    //differences 
    const leftTime = nextYearMs - timeMs;
    let leftSeconds = leftTime / 1000;

    const days = Math.floor(leftSeconds / 60 / 60 / 24);
    leftSeconds -= days * 60 * 60 * 24;

    const hours = Math.floor(leftSeconds / 60 / 60);
    leftSeconds -= hours * 60 * 60;

    const min = Math.floor(leftSeconds / 60);

    const seconds = Math.floor(leftSeconds - min * 60);

    return {
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        min: min < 10 ? '0' + min : min,
        seconds: seconds < 10 ? '0' + seconds : seconds,
    }
}


function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas');
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }

    const time = timeCounter();

    const HTML = `<div class="time-box">
                    <div class="time">${time.days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time');

    let timePassed = 0;

    setInterval(() => {
        const time = timeCounter();
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
    }, 1000);

    return true;
}


window.addEventListener('load', () => {
    timeCounter();
})