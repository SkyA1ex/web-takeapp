

var sliderImages = [
        '/img/car.jpg',
        '/img/man.jpg'];
var curIndex = 0;
var imgDuration = 3000;


var menuToggle;
var menu;
var slider;
var morePowerStory;



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


function readTextFilePromise(file) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", file, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == "200") {
          resolve(xhr.responseText);
        }
    };
    xhr.send();
  });
}

function setPromiseText(text) {
  var data = JSON.parse(text);
  morePowerStory.innerHTML = data.story;
}

function init() {
  menu = document.getElementById('menu');
  menuToggle = document.getElementById('menu-toggle');
  slider = document.getElementById('slider');
  morePowerStory = document.getElementById('more-power-story');

  menuToggle.addEventListener('click', function(e) {
    menu.classList.toggle('menu_hidden');
  }, false);

  slideShow();

  readTextFilePromise("/raw/data.json").then(setPromiseText);
}

window.onload = init;



