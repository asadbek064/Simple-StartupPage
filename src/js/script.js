const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

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

  /*  Check if wallpaper already been set by guest */
  var guestWallpaper = getLocalStorage("GUEST_WALLPPAPER");
  if (guestWallpaper != null) {
       /* set guest wallpaper */
       document.getElementsByTagName("body")[0].style = "background-image: url("+guestWallpaper.URL+")";
       
       /*  force reload tab for wallpaper to change */
       chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
      });

  } else {
    /*  Set default wallpapers */
    const ListImages = ['1.jpg','2.jpg','3.png','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.png','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.png','22.png'];
  
    const Choosen  =  ListImages[Math.floor(Math.random() * ListImages.length)];
    document.getElementsByTagName("body")[0].style = 'background-image: url("../img/'+Choosen+'");';
  }

  /* population  Titles and links */
  var linkList = getLocalStorage("LINK_LIST");
  var titleList = getLocalStorage("TITLE_LIST");
  populatView(titleList, linkList);
}

new Todo().display;
new Weather(place).getWeather;