const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mobileNumber = document.getElementById("mobile-number");
const outputMessage = document.getElementById("outputMessage"); // For displaying the message

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the form from submitting immediately

    const isValid = validateInputs();
    
    if (isValid) {
        // If the form is valid, show a thank-you message
        outputMessage.textContent = "Thank you for submitting the form! We will contact you soon.";
        outputMessage.style.color = "#28a745"; // Change the color of the message (optional)
        form.reset(); // Reset the form fields
    }
});

function validateInputs() {
    let isValid = true; // Initialize a valid flag

    // Get input values
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const mobileNumberValue = mobileNumber.value.trim(); // Get mobile number value

    // Username validation
    if (usernameValue === "") {
        setError(username, "Username cannot be blank");
        isValid = false; // Set isValid to false
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === "") {
        setError(email, "Email cannot be blank");
        isValid = false; // Set isValid to false
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Not a valid email");
        isValid = false; // Set isValid to false
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === "") {
        setError(password, "Password cannot be blank");
        isValid = false; // Set isValid to false
    } else {
        setSuccess(password);
    }

    // Mobile Number validation
    if (mobileNumberValue === "") {
        setError(mobileNumber, "Please enter your mobile number");
        isValid = false; // Set isValid to false
    } else if (!isValidMobileNumber(mobileNumberValue)) {
        setError(mobileNumber, "Not a valid mobile number");
        isValid = false; // Set isValid to false
    } else {
        setSuccess(mobileNumber);
    }

    return isValid; // Return the validity of the form
}

function setError(input, message) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error");
    errorDisplay.textContent = message;
    input.style.borderColor = "#ff3860"; // Red border for error
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error");
    errorDisplay.textContent = ""; // Clear any error message
    input.style.borderColor = "#f8b400"; // Yellow border for success
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email validation regex
}

// Mobile number validation function
function isValidMobileNumber(number) {
    return /^\d{10}$/.test(number); // Assumes a valid mobile number is 10 digits
}
