var map = document.querySelector(".modal-map");
var map_link = document.querySelector(".map-link");
var map_close = map.querySelector(".modal-close");
var modal_overlay = document.querySelector(".modal-overlay");

map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_overlay.classList.add("overlay-show");
    map.classList.add("modal-show");
});

map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_overlay.classList.remove("overlay-show");
    map.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (map.classList.contains("modal-show")) {
            modal_overlay.classList.remove("overlay-show");
            map.classList.remove("modal-show");
        }
    }
})