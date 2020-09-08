const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

function engines () {
  return {
    g: ['https://google.com/search?q=', 'Google'],
    d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
    y: ['https://youtube.com/results?search_query=', 'Youtube'],
    w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
  };
}

const { parse, stringify } = JSON;

const nodes = (elem) =>
      Array.prototype.slice.call($(elem).children);

var place = localStorage.place || 'new york';

$('.weather .edit').onclick = () =>
  $('.weather-config').classList.add('show');

$('.weather-config input').onkeyup = (e) => {
  if (e.key == 'Enter') {
    localStorage.place = e.target.value;
    window.location.reload();
  }
  else if (e.keyCode == 27)
    e.target.parentNode.classList.remove('show');
};

(function () {
  if (localStorage.getItem("todo") === null)
    localStorage.todo = '[]';
})();

window.onload = function PageLoad() {
  const ListImages = ['1.jpg','2.jpg','3.png','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.png','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.png','22.png'];

  const Choosen  =  ListImages[Math.floor(Math.random() * ListImages.length)];
  document.getElementsByTagName("body")[0].style = 'background-image: url("../img/'+Choosen+'");';
}

new Todo().display;
new Weather(place).getWeather;


