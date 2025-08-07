const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('form-message');

const fields = {
  name: {
    input: document.getElementById('name'),
    error: document.getElementById('name-error'),
    validate: value => {
      if (!value.trim()) return 'Name is required.';
      if (!/^[A-Za-z ]{2,}$/.test(value)) return 'Name must be at least 2 letters and contain only letters and spaces.';
      return '';
    }
  },
  email: {
    input: document.getElementById('email'),
    error: document.getElementById('email-error'),
    validate: value => {
      if (!value.trim()) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
      return '';
    }
  },
  phone: {
    input: document.getElementById('phone'),
    error: document.getElementById('phone-error'),
    validate: value => {
      if (!value.trim()) return 'Phone number is required.';
      if (!/^[0-9]{10,15}$/.test(value)) return 'Phone number must be 10-15 digits.';
      return '';
    }
  },
  age: {
    input: document.getElementById('age'),
    error: document.getElementById('age-error'),
    validate: value => {
      if (!value.trim()) return 'Age is required.';
      const age = parseInt(value, 10);
      if (isNaN(age) || age < 18) return 'You must be at least 18 years old.';
      return '';
    }
  },
  message: {
    input: document.getElementById('message'),
    error: document.getElementById('message-error'),
    validate: value => {
      if (value.length > 500) return 'Message cannot exceed 500 characters.';
      return '';
    }
  }
};

function validateField(field) {
  const value = field.input.value;
  const errorMsg = field.validate(value);
  field.error.textContent = errorMsg;
  if (errorMsg) {
    field.input.classList.add('invalid');
    field.input.classList.remove('valid');
  } else {
    field.input.classList.remove('invalid');
    if (value) field.input.classList.add('valid');
    else field.input.classList.remove('valid');
  }
  return !errorMsg;
}

function validateForm() {
  let valid = true;
  for (const key in fields) {
    if (!validateField(fields[key])) valid = false;
  }
  submitBtn.disabled = !valid;
  return valid;
}

for (const key in fields) {
  fields[key].input.addEventListener('input', () => {
    validateField(fields[key]);
    validateForm();
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    formMessage.style.color = '#4caf50';
    formMessage.textContent = 'Registration submitted successfully!';
    form.reset();
    for (const key in fields) {
      fields[key].input.classList.remove('valid', 'invalid');
      fields[key].error.textContent = '';
    }
    submitBtn.disabled = true;
  } else {
    formMessage.style.color = '#ff6b6b';
    formMessage.textContent = 'Please fix the errors above.';
  }
});
