let loginForm = document.querySelector("#loginForm");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let errorMsg = document.querySelector("#errorMsg");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting
});
let email = emailInput.value;
let password = passwordInput.value;

if (email == "" || password == "") {
    errorMsg.innerText = "All fields are required";
    return;
}
if (!email.includes("@") || !email.includes(".")) {
    errorMsg.innerText = "Enter a valid email address";
    return;
}
if (password.length < 8) {
    errorMsg.innerText = "Password must be at least 8 characters long";
    return;
}
//get stored user data from local storage
let storedUser = localStorage.getItem("user");
//check if user data exists by converting back o object
let user = JSON.parse(storedUser);

if (email !== user.email || password !== user.password) {
    errorMsg.innerText = "Invalid credentials";
    return;
}

localStorage.setItem("isLoggedIn", "true");
window.location.href = "dashboard.html";

if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}