window.onload = function PageLoad() {
    const ListImages = ['1.jpg','2.jpg','3.png','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.png','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.png','22.png'];

    const Choosen  =  ListImages[Math.floor(Math.random() * ListImages.length)];
    document.getElementsByTagName("body")[0].style = 'background-image: url("../img/'+Choosen+'");';
}

/* 
Chromes  only allows one tab per click re

function OpenAllWorkTabs() {
    const WorkTabs = ['https://app.slack.com/client/','https://pieshares.atlassian.net/','https://stackoverflow.com/users/8628497/karimov'];
} 
 */