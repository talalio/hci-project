const darkMode = () => {
  var body = document.getElementById('bd');
  if (body.classList.contains('bootstrap')) {
    body.classList.remove('bootstrap')
    body.classList.toggle('bootstrap-dark');
    document.cookie = 'dark-mode=on; path=/';
  } else if (body.classList.contains('bootstrap-dark')) {
    body.classList.remove('bootstrap-dark')
    body.classList.toggle('bootstrap');
    document.cookie = 'dark-mode=off; path=/';
  }
}

document.querySelector(".ccontainer").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    darkMode();
})

const cookies = `; ${document.cookie}`;
var darkCookie = cookies.split('; dark-mode=')

if (darkCookie.length === 2) {
  darkCookie = darkCookie.pop().split(';').shift();
  if (darkCookie == 'on') {
    darkMode();
  }
}
