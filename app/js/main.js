

var sliderImages = [
        '/img/car.jpg',
        '/img/man.jpg'];
var curIndex = 0;
var imgDuration = 3000;


var menuToggle;
var menu;
var slider;


function slideShow() {
    slider.classList.toggle('slider_fadeOut');
    setTimeout(function() {
      var s = "url('" + sliderImages[curIndex] + "')";
      slider.style.backgroundImage = s;
      slider.classList.toggle('fadeOut');
    }, 1000);
    curIndex++;
    if (curIndex == sliderImages.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}

function init() {
  menu = document.getElementById('menu');
  menuToggle = document.getElementById('menu-toggle');
  slider = document.getElementById('slider');



  menuToggle.addEventListener('click', function(e) {
    menu.classList.toggle('menu_hidden');
    console.log('huy');
  }, false);

  slideShow();
}

window.onload = init;


