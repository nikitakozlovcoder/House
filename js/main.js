
function onScroll() {
    var nav = document.getElementsByClassName('header_nav_main')[0];
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    scrolled !== 0 ? nav.classList.add('nav_light') : nav.classList.remove('nav_light');
}


window.addEventListener('scroll', onScroll);




