
var expanded = true;
window.onload = function () {

    window.addEventListener('scroll', onScroll);

    function onScroll() {
        var nav = document.getElementsByClassName('header_nav_main')[0];
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        scrolled !== 0 ? nav.classList.add('nav_light') : nav.classList.remove('nav_light');
    }

    var expandGrid = document.getElementsByClassName('showcase_grid_expand')[0];

    expandGrid.onclick = function () {
        expanded = !expanded;
        var grid = document.getElementsByClassName('showcase_grid')[0];
        var showcaseOverflow = document.getElementsByClassName('showcase_overflow')[0];

        if(!expanded) {

            var height = grid.clientHeight;
            showcaseOverflow.style.height = 150 + height + "px";
            expandGrid.innerHTML = "Свернуть...";
            expandGrid.style.padding = "5px";
            console.log(height);
        }
        else{
            showcaseOverflow.style.height = "400px";
            expandGrid.innerHTML = "Показать все...";
            expandGrid.style.padding = "15px";
        }

    };
};







