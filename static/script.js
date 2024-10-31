const email = document.getElementById("email");
const label = document.querySelector(".invalid-label");

const mainWrapper = document.getElementById("main-wrapper");
const subWrapper = document.getElementById("sub-wrapper");

const picture = document.getElementById("main-page-illustration");
const changePicture = window
    .matchMedia("(max-width: 960), (orientation: portrait)")
    .addEventListener("change", (e) => {
        picture.src = e.matches
            ? "assets/images/illustration-sign-up-mobile.svg"
            : "assets/images/illustration-sign-up-desktop.svg";
    });

function emailValidation() {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        email.classList.add("invalid-input");
        label.style.display = "flex";
    } else {
        document.getElementById("user-email").textContent = email.value;
        mainWrapper.classList.add("hidden");
        subWrapper.classList.remove("hidden");
    }
}

document.getElementById("dismiss-msg").addEventListener("click", () => {
    mainWrapper.classList.remove("hidden");
    subWrapper.classList.add("hidden");
    email.value = "";
});

email.addEventListener("input", () => {
    email.classList.remove("invalid-input");
    label.style.display = "none";
});

document.getElementById("main-form").addEventListener("submit", (event) => {
    event.preventDefault();
    emailValidation();
});
