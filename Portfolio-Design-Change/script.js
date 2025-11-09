const navBtn = document.getElementById("navBtn");
const navIteam = document.getElementById("navIteam");

// Mobile Nav
navBtn.addEventListener("click", function() {
    navIteam.classList.toggle("hide");
})