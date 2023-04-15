const btn = document.getElementById('boton_magico');

btn.addEventListener('click', () => {
  const form = document.getElementById('form_id');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});
