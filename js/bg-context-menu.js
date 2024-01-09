window.addEventListener("load", () => {
    const bgDiv = document.querySelector("#bg");
    bgDiv.oncontextmenu = () => {
        return false;
    }
})
