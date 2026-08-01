// ================================
// Student Registration Validation
// ================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let gender = document.getElementById("gender").value;
        let course = document.getElementById("course").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        // Empty Field Validation
        if (name === "" || email === "" || phone === "" ||
            gender === "" || course === "" ||
            password === "" || confirmPassword === "") {

            alert("Please fill in all the fields.");
            return;
        }

        // Email Validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation
        let phonePattern = /^[0-9]{10}$/;

        if (!phone.match(phonePattern)) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        // Password Length
        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            return;
        }

        // Password Match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration Successful!");

        registerForm.reset();

    });

}

// ================================
// Contact Form Validation
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" ||
            subject === "" || message === "") {

            alert("Please complete all fields.");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your message has been sent successfully!");

        contactForm.reset();

    });

}