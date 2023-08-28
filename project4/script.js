document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        // Perform your validation here
        // For example, you can check if fields are not empty

        if (username && email && password) {
            alert("Registration successful!");
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
