let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let time = true;

function start() {
  time = true;
  stopwatch();
}

function stop() {
  time = false;
}

function reset() {
  time = false;
  hr = 0;
  min = 0;
  count = 0;
  sec = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (time == true) {
    count = count + 1;

    document.getElementById("count").innerHTML = count;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }

    if (sec < 10) {
      document.getElementById("sec").innerHTML = "0" + sec;
    } else {
      document.getElementById("sec").innerHTML = sec;
    }

    if (min < 10) {
      document.getElementById("min").innerHTML = "0" + min;
    } else {
      document.getElementById("min").innerHTML = min;
    }

    if (hr < 10) {
      document.getElementById("hr").innerHTML = "0" + hr;
    } else {
      document.getElementById("hr").innerHTML = hr;
    }

    setTimeout("stopwatch()", 10);
  }
}
