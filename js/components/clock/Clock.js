class Clock {
    // TODO: isplesti iki galimybes nurodyti custom data, iki kada skaiciuoja likusi laika
    constructor(selector, date) {
        this.selector = selector;
        this.deadline = {
            year: (new Date()).getFullYear(),
            month: 11,
            day: 16,
            hour: 10,
            minutes: 0,
            seconds: 0
        }
        this.dateString = this.createDateString();
        this.DOM = null;
        this.DOMdays = null;
        this.DOMhour = null;
        this.DOMminutes = null;
        this.DOMseconds = null;
    }

    init() {
        if (this.isValidSelector()) {
            this.findClockValueElements();
            if (!this.arBusMetines()) {
                this.atnaujintiInformacija();
            }
            this.start();
        }
    }

    createDateString() {
        const { year, month, day, hour, minutes, seconds } = this.deadline;
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }

    arBusMetines() {
        const jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        return Date.now() < jubiliejausMiliseconds;
    }

    atnaujintiInformacija() {
        /*
        kadangi, pagal dabartinius metus, metines yra praeityje,
        tai reikia atnaujinti metus ir is naujo viska perskaiciuoti
        */
        this.deadline.year++;
        this.dateString = this.createDateString();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: blogas selectorius.')
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    findClockValueElements() {
        const values = this.DOM.querySelectorAll('.value');
        this.DOMdays = values[0];
        this.DOMhour = values[1];
        this.DOMminutes = values[2];
        this.DOMseconds = values[3];
    }

    start() {
        let jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        setInterval(() => {
            const now = Date.now();
            let diff = jubiliejausMiliseconds - now;
            if (diff < 0) {
                this.atnaujintiInformacija();
                jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
                diff = jubiliejausMiliseconds - now;
            }

            let secondsLeft = Math.floor(diff / 1000);
            const days = Math.floor(secondsLeft / 60 / 60 / 24);

            secondsLeft -= days * 60 * 60 * 24;
            const hours = Math.floor(secondsLeft / 60 / 60);

            secondsLeft -= hours * 60 * 60;
            const minutes = Math.floor(secondsLeft / 60);

            const seconds = secondsLeft - minutes * 60;

            this.DOMdays.innerText = days;
            this.DOMhour.innerText = this.formarNumber(hours);
            this.DOMminutes.innerText = this.formarNumber(minutes);
            this.DOMseconds.innerText = this.formarNumber(seconds);
        }, 1000);   // miliseconds
    }

    formarNumber(number) {
        return number < 10 ? '0' + number : number;
    }
}

export { Clock }