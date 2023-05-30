// Nav-Links On-click Colour

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
    document.getElementById("news").style.color = "#00ffc8";
    document.getElementById("about").style.color = "white";
    document.getElementById("home").style.color = "white";
    document.getElementById("contact").style.color = "white";
}

function contact() {
    document.getElementById("contact").style.color = "#00ffc8";
    document.getElementById("about").style.color = "white";
    document.getElementById("home").style.color = "white";
    document.getElementById("news").style.color = "white";
}


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