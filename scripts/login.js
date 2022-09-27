var link = document.querySelector(".user-navigation-link");
var popup = document.querySelector(".modal-login");
var button_close = popup.querySelector(".modal-close");
var login_form = popup.querySelector(".login-form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var modal_overlay = document.querySelector(".modal-overlay");
var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = "";


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_overlay.classList.add("overlay-show");
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

button_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_overlay.classList.remove("overlay-show");
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})

login_form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Введите логин и пароль");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            modal_overlay.classList.remove("overlay-show");
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}


