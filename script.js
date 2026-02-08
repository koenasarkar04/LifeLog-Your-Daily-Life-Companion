let loginForm = document.querySelector("#loginForm");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let errorMsg = document.querySelector("#errorMsg");

if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href="index.html";
}

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting

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
        //check if user data exists by converting back o object
        let user = JSON.parse(storedUser);

        if (email !== user.email || password !== user.password) {
            errorMsg.innerText = "Invalid credentials";
            return;
        }

        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    });
}