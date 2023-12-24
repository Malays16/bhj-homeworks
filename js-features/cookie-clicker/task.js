let cookieID = document.getElementById ('cookie');
let clicker__counterID = document.getElementById('clicker__counter');
let counter = 0;
let width = 200;
let height = 200;

cookieID.addEventListener('click', function(){
  counter++;
  clicker__counterID.textContent = counter;
   if (width === 200 && height === 200) {
            width = 180;
            height = 180;
        } else {
            width = 200;
            height = 200;
        }

        cookie.setAttribute('width', width);
        cookie.setAttribute('height', height);
});
