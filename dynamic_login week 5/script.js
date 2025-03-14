// Select the form container
let formContainer = document.getElementById("form-container");

// Create the form dynamically
let form = document.createElement("div");
form.classList.add("form-box");

// Add form heading
let heading = document.createElement("h2");
heading.innerText = "Login";
form.appendChild(heading);

// Create email label & input
let emailLabel = document.createElement("label");
emailLabel.innerText = "Email:";
form.appendChild(emailLabel);

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";
emailInput.id = "email";
form.appendChild(emailInput);

// Create password label & input
let passwordLabel = document.createElement("label");
passwordLabel.innerText = "Password:";
form.appendChild(passwordLabel);

let passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Enter your password";
passwordInput.id = "password";
form.appendChild(passwordInput);

// Create login button
let loginButton = document.createElement("button");
loginButton.innerText = "Login";

// Attach event listener to login button
loginButton.addEventListener("click", function () {
    let email = emailInput.value;
    let password = passwordInput.value;

    // Reset previous error styles
    emailInput.style.border = "";
    passwordInput.style.border = "";

    // Validation checks
    if (email === "" || password === "") {
        alert("All fields are required!");
        if (email === "") emailInput.style.border = "2px solid red";
        if (password === "") passwordInput.style.border = "2px solid red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email format!");
        emailInput.style.border = "2px solid red";
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        passwordInput.style.border = "2px solid red";
        return;
    }

    // Show login success alert
    alert("Email: " + email + "\nPassword: " + password);
});

// Append button to form
form.appendChild(loginButton);

// Add form to the container
formContainer.appendChild(form);
