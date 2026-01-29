const navMenu = document.querySelectorAll(".hamburger");
const mobileNav = document.getElementById("responsiveNav");
const close = document.getElementById("close");

navMenu.forEach(hamburger => {
    hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("hide");
    });
});

close.addEventListener("click", function () {
    mobileNav.classList.toggle("hide");
});