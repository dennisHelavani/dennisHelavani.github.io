let burger = document.getElementById("burger"),
    nav = document.getElementById("second-nav");

burger.addEventListener("click", function(e) {
    this.classList.toggle("is-open");
    nav.classList.toggle("is-open");
});

/* Onload demo - dirty timeout */
let clickEvent = new Event("click");

window.addEventListener("load", function(e) {
    burger.dispatchEvent(clickEvent);

    setTimeout(function() {
        burger.dispatchEvent(clickEvent);
    }, 5500);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("burger").style.top = "0px";
    } else {
        document.getElementById("burger").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};