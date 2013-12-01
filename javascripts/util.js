var now = new Date(),
    xmas = new Date(now.getFullYear(), 11, 25);

function toXmas() {
    var now = new Date(),
        delta = (xmas - now) / 1000,
        days = Math.floor(delta / 3600 / 24),
        remainder = delta % (3600 * 24),
        hours = Math.floor(remainder / 3600),
        minutes, 
        seconds;

    remainder = remainder % 3600;

    minutes = Math.floor(remainder / 60);
    seconds = Math.ceil(remainder % 60);

    return {days: days, hours: hours, minutes: minutes, seconds: seconds};
}

function toBday(month, day) {
    var now = new Date(),
        bday = new Date(now.getFullYear(), month, day);

    if (bday < now) {
        bday.setFullYear(now.getFullYear() + 1);
    }

    var delta = (bday - now) / 1000,
        days = Math.floor(delta / 3600 / 24),
        remainder = delta % (3600 * 24),
        hours = Math.floor(remainder / 3600),
        minutes, 
        seconds;

    remainder = remainder % 3600;

    minutes = Math.floor(remainder / 60);
    seconds = Math.ceil(remainder % 60);

    return {days: days, hours: hours, minutes: minutes, seconds: seconds};
}

//console.log(now);
//console.log(xmas);

//setInterval(toXmas, 500);
