function checkStrength() {
  const password = document.getElementById('password').value;
  const bar = document.getElementById('strength-bar');
  const text = document.getElementById('strength-text');

  let strength = 0;

  if (password.length >= 6) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^a-zA-Z0-9]/)) strength++;

  if (password.length === 0) {
    bar.style.width = '0%';
    bar.style.backgroundColor = 'grey';
    text.textContent = '';
    return;
  }

  switch (strength) {
    case 1:
    case 2:
      bar.style.width = '30%';
      bar.style.backgroundColor = 'red';
      text.textContent = 'Weak';
      break;
    case 3:
    case 4:
      bar.style.width = '60%';
      bar.style.backgroundColor = 'orange';
      text.textContent = 'Medium';
      break;
    case 5:
      bar.style.width = '100%';
      bar.style.backgroundColor = 'green';
      text.textContent = 'Strong';
      break;
  }
}
