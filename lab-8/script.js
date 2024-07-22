document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            valid = false;
        }

        if (valid) {
            alert('Success');
            form.submit();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
        const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
        const email = sanitizeInput(document.getElementById('email').value.trim());
        const password = sanitizeInput(document.getElementById('password').value.trim());
        const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value.trim());

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            valid = false;
        }

        if (valid) {
            form.submit();
        }
    });

    function sanitizeInput(input) {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML;
    }
});
