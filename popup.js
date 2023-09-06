function togglePopup() {
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
}

document.querySelector("#button").addEventListener("click", togglePopup);
document.querySelector(".popup-exit").addEventListener("click", togglePopup);