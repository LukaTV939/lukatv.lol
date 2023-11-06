document.addEventListener("DOMContentLoaded", function() {
    if (!sessionStorage.getItem("popupDisplayed")) {
        document.getElementById("popup").style.display = "flex";
        sessionStorage.setItem("popupDisplayed", "true");
    }
});

function openPopup() {
    var hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
        localStorage.setItem("hasSeenPopup", true);
    }
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    sessionStorage.setItem("popupDisplayed", "true");
}