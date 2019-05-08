class Clock {
  constructor() {
    setInterval(() => {
      this.theTime();
    }, 1000);
  }
  theTime() {
    var date    = new Date(),
        hrsAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
        hrs     = addZero(hrsAmPm),
        min     = addZero(date.getMinutes()),
        secs    = addZero(date.getSeconds()),
        ampm    = (date.getHours() > 12) ? 'pm' : 'am',
        time    = `${hrs}:${min}:${secs} ${ampm}`;


    function addZero(num) {
      return (num < 10) ? ('0' + num) : num;
    }

    return console.log(time);
  }
}

//module.exports = new CLock();

var clock = new Clock();
