let menu = document.querySelector("#menu-bar");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove('active');
};

// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     reset: true
// });

// sr.reveal('.home-text', { delay: 300, origin: "top" });
// sr.reveal('.home-img', { delay: 300, origin: "top" });
// sr.reveal('.about-img', { delay: 200, origin: "top" });
// sr.reveal('.about', { delay: 200, origin: "right" });
// sr.reveal('.service,.contact,.cta,', { delay: 200, origin: "top" });