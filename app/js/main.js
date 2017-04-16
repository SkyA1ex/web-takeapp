
var menuToggle;
var menu;

function init() {
  menu = document.getElementById('menu');
  menuToggle = document.getElementById('menu-toggle');
  menuToggle.addEventListener('click', function(e) {
    menu.classList.toggle('menu_hidden');
    console.log('huy');
  }, false);
}

window.onload = init;