const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 56 ){
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56 ) {
        navEl.classList.remove('navbar-scrolled');
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

