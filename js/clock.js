/* Clock */
const clockInterval = 100;
const clockElement = document.getElementById('clock');

function getDateTime() {
  const dateTime = new Date();
  let day = dateTime.getDate();
  let month = dateTime.getMonth() + 1;
  let hour = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();

  if (hour < 0) {
      hour = 24 + hour;
  }

  let date = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + dateTime.getFullYear();
  let time = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

  return date + '\n' + time;
}

function setClock() {
  clockElement.innerText = getDateTime();
}

setClock();

setInterval(() => {
  setClock();
}, clockInterval);
