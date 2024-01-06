const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm-password");
const check = document.querySelector(".check");
const createAccountButton = document.querySelector("button[type='submit']");

confirmPasswordInput.addEventListener("input", passwordMatch);
passwordInput.addEventListener("input", passwordMatch);
createAccountButton.addEventListener("click", validatePasswords);


function passwordMatch() {
    if (passwordInput.value === "" || confirmPasswordInput.value === "") {
        check.textContent = "";
        confirmPasswordInput.style.outline = "1px solid #bbbbbb";
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        check.textContent = "Passwords don't match";
        check.style.color = "red";
        confirmPasswordInput.style.outline = "1px solid red";
    } else if (confirmPasswordInput.value === passwordInput.value) {
        check.textContent = "OK";
        check.style.color = "green";
        confirmPasswordInput.style.outline = "1px solid green";
    }
}
function validatePasswords(event) {
    if (confirmPasswordInput.value !== passwordInput.value) {
        event.preventDefault();
        alert("Passwords don't match. Please fix before submitting.");
    }
}
