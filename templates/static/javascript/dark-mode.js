const cookies = `; ${document.cookie}`;
var darkCookie = cookies.split('; dark-mode=');

var darkModeSwitch = document.querySelector('#dmodec');
var ghSvg = document.querySelector('#gh-svg');

const darkMode = () => {
  var body = document.getElementById('bd');
  if (body.classList.contains('bootstrap')) {
    body.classList.remove('bootstrap')
    body.classList.toggle('bootstrap-dark');
    ghSvg.style.fill = 'white';
    darkModeSwitch.title = 'light mode';
    document.cookie = 'dark-mode=on; Secure; path=/';
  } else if (body.classList.contains('bootstrap-dark')) {
    body.classList.remove('bootstrap-dark')
    body.classList.toggle('bootstrap');
    ghSvg.style.fill = 'black';
    darkModeSwitch.title = 'dark mode';
    document.cookie = 'dark-mode=off; Secure; path=/';
  }
}

document.querySelector(".ccontainer").addEventListener("click", () => {
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  darkMode();
});

if (darkCookie.length === 2) {
  darkCookie = darkCookie.pop().split(';').shift();
  if (darkCookie == 'on') {
    document.querySelector(".ccontainer").click();
  }
}
