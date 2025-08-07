document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    if (username === 'admin' && password === 'admin') {
        message.style.color = '#4caf50';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = '#ff6b6b';
        message.textContent = 'Invalid username or password.';
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (!name || !phone || !email || !message) {
        formMessage.style.color = '#ff6b6b';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }
    // Basic phone and email validation
    const phonePattern = /^[0-9]{10,15}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!phonePattern.test(phone)) {
        formMessage.style.color = '#ff6b6b';
        formMessage.textContent = 'Please enter a valid phone number.';
        return;
    }
    if (!emailPattern.test(email)) {
        formMessage.style.color = '#ff6b6b';
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }
    formMessage.style.color = '#4caf50';
    formMessage.textContent = 'Message sent successfully!';
    document.getElementById('contactForm').reset();
});
