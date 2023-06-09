// Function to load navbar and footer
$(function () {
    $("#footer").load("assets/content/static/footer.html");
});

$(function () {
    $("#navbar").load("assets/content/static/navbar.html");
});

// Back to Top button 
var btn = $('#backToTop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#home-section').offset().top
    }, 'slow');
});

// Home button click animation
var home = $('#home');
home.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#home-section').offset().top
    }, 'slow');
});
var about = $('#about');
about.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#about-section').offset().top
    }, 'slow');
});

// Navbar scroll animation
$(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $(".nav-bar").addClass("affix");
        console.log("OK");
    } else {
        $(".nav-bar").removeClass("affix");
    }
});

// Nav Links on click colour
function home() {
    document.getElementById("home").style.color = "#00ffc8";
    document.getElementById("about").style.color = "white";
    document.getElementById("news").style.color = "white";
    document.getElementById("contact").style.color = "white";
}
function about() {
    document.getElementById("home").style.color = "white";
    document.getElementById("about").style.color = "#00ffc8";
    document.getElementById("news").style.color = "white";
    document.getElementById("contact").style.color = "white";
}
function news() {
    document.getElementById("home").style.color = "white";
    document.getElementById("about").style.color = "white";
    document.getElementById("news").style.color = "#00ffc8";
    document.getElementById("contact").style.color = "white";
}
function contact() {
    document.getElementById("home").style.color = "white";
    document.getElementById("about").style.color = "white";
    document.getElementById("news").style.color = "white";
    document.getElementById("contact").style.color = "#00ffc8";
}

// Menu Icons showing animation
function NavOpen() {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("close").style.display = "block";
}
function NavClose() {
    document.getElementById("close").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
}
function NavOverlay() {
    document.getElementById("close").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
}

// Opening and closing the side navigation
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".side-bar");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("nav--open");
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector("#side-home").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-about").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-news").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-contact").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-skills").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-contact").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-home");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-about");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-news");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-contact");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-skills");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-contact");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links")
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
    });
});


