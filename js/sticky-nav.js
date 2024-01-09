function stickyNav() {
    let navbar = document.querySelector("#root header nav");
    if (window.pageYOffset > 0) {
        console.log("navbar is sticky");
        navbar.classList.add("sticky");
    } else {
        console.log("navbar is not sticky");
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("load", () => {
    window.onscroll = stickyNav;
});
