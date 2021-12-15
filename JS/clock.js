const toDay = document.querySelector(".toDay");
const times = document.querySelector(".times");

function currentTime() {
  const date = new Date();
  //day
  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //times
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  toDay.innerHTML = `${year}.${month}.${day}.${
    dayOfTheWeek[date.getDay()]
  }</br>`;
  times.innerHTML = `${hours}:${min}<font size=7>:${sec}</font size>`;
}

currentTime();
setInterval(currentTime, 1000);
