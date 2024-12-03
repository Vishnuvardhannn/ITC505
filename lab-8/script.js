function sanitizeInput(input)
{
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}

function validateForm() {
    const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
    const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const password = sanitizeInput(document.getElementById('password').value);
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value);

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('All fields are required.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
