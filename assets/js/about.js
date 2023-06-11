// Function to load navbar and footer
$(function () {
    $("#footer").load("assets/content/static/footer.html");
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
});// Navbar scroll animation
$(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $(".nav-bar").addClass("affix");
    } else {
        $(".nav-bar").removeClass("affix");
    }
});


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
    document.querySelector("#side-courses").addEventListener("click", () => {
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
    const nav = document.querySelector("#side-courses");
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