const emailInput = document.querySelector(".emailip");
const subscribeBtn = document.querySelector(".container .btn");
const dismissBtn = document.querySelector(".success-popup .btn");

const errorText = document.querySelector(".email");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".success-popup");
const boldEmail = document.querySelector(".bold");

const errorSpan = document.createElement("span");
errorSpan.style.color = "hsl(4, 100%, 67%)";
errorSpan.style.fontSize = "12px";
errorSpan.style.float = "right";

errorText.appendChild(errorSpan);

 overlay.style.display = "none";
 popup.style.display = "none";

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        emailInput.classList.add("email-error");
        errorSpan.textContent = "Valid email required";
        return;
    }

    emailInput.classList.remove("email-error");
    errorSpan.textContent = "";

    boldEmail.textContent = email;
    overlay.style.display = "flex";
    popup.style.display = "block";
});

dismissBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.style.display = "none";
    emailInput.value = "";
});
