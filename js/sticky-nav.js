function stickyNav() {
    let navbar = document.querySelector("#root header nav");
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("load", () => {
    window.onscroll = stickyNav;
});
