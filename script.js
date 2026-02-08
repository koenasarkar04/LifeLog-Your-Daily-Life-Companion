let loginForm = document.querySelector("#loginForm");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let errorMsg = document.querySelector("#errorMsg");
let nameInput = document.querySelector("#name");
let registerForm = document.querySelector("#registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting

        let name = nameInput.value.trim(); // Remove leading and trailing whitespace so that we can check if the field is empty more accurately
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        
        errorMsg.innerText = ""; // Clear previous error message

        if (name === "" || email === "" || password ==="") {
            errorMsg.innerText = "All fields are required";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            errorMsg.innerText = "Enter a valid email address";
            return;
        }
        if (password.length < 8) {
            errorMsg.innerText = ("Password must be at least 8 characters long");
            return;
        }
        if (localStorage.getItem("user")) {
            errorMsg.innerText = "User already exists. Please login.";
            return;
        }
        let user = {
            name : name,
            email : email,
            password : password
        };
        //localStorage.setItem (KEY, VALUE)
        localStorage.setItem("user", JSON.stringify(user)); // Store user data as a string in local storage as it only understands text
        window.location.href = "index.html"; // Redirect to login page after successful registration
    });
}
// pathname check to know currently where is the user logged in
if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href="index.html";
} // Redirect to login page if user tries to access dashboard without logging in

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting, disables HTML auto behaviour and allows us to take control of the login process with JavaScript

        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        errorMsg.innerText = ""; // Clear previous error message

        if (email === "" || password === "") {
            errorMsg.innerText = "All fields are required";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            errorMsg.innerText = "Enter a valid email address";
            return;
        }
        if (password.length < 8) {
            errorMsg.innerText = ("Password must be at least 8 characters long");
            return;
        }
        //get stored user data from local storage
        let storedUser = localStorage.getItem("user");
        if (!storedUser) {
            errorMsg.innerText = "No user found. Please register first.";
            return; 
        }
        //check if user data exists by converting back to object from string and comparing with input
        let user = JSON.parse(storedUser);

        if (email !== user.email || password !== user.password) {
            errorMsg.innerText = "Invalid credentials";
            return;
        }

        localStorage.setItem("isLoggedIn", "true"); //localStorage.setItem (KEY, VALUE)
        window.location.href = "dashboard.html";
    });
}