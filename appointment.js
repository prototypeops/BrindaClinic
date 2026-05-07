/* ============================================
   BRINDA CLINIC — Appointment Page JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  // ─── Min date = today ───
  const dateInput = document.getElementById('appt-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // ─── Form validation & submission ───
  const form = document.getElementById('appointment-form');
  const successOverlay = document.getElementById('success-overlay');

  function validateField(input) {
    const err = input.closest('.form-field')?.querySelector('.field-error');
    let valid = true;
    input.classList.remove('error');
    err?.classList.remove('show');

    if (input.required && !input.value.trim()) {
      valid = false;
      input.classList.add('error');
      if (err) { err.textContent = 'This field is required.'; err.classList.add('show'); }
    } else if (input.type === 'tel' && input.value.trim()) {
      const phone = input.value.replace(/\s/g, '');
      if (!/^[+]?[\d\-\(\)]{8,15}$/.test(phone)) {
        valid = false;
        input.classList.add('error');
        if (err) { err.textContent = 'Please enter a valid phone number.'; err.classList.add('show'); }
      }
    } else if (input.type === 'email' && input.value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        valid = false;
        input.classList.add('error');
        if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('show'); }
      }
    }
    return valid;
  }

  form?.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      field.classList.remove('error');
      field.closest('.form-field')?.querySelector('.field-error')?.classList.remove('show');
    });
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      const firstErr = form.querySelector('.error');
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Booking...';

    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));

    // Populate confirmation details
    const name = document.getElementById('appt-name')?.value || '';
    const date = document.getElementById('appt-date')?.value || '';
    const time = document.getElementById('appt-time')?.value || '';
    const service = document.getElementById('appt-service')?.value || '';

    const confirmName = document.getElementById('confirm-name');
    const confirmDate = document.getElementById('confirm-date');
    const confirmTime = document.getElementById('confirm-time');
    const confirmService = document.getElementById('confirm-service');

    if (confirmName) confirmName.textContent = name;
    if (confirmDate) confirmDate.textContent = date ? new Date(date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';
    if (confirmTime) confirmTime.textContent = time;
    if (confirmService) confirmService.textContent = service;

    successOverlay?.classList.add('show');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Book Appointment';
    form.reset();
  });

  document.getElementById('success-close')?.addEventListener('click', () => {
    successOverlay?.classList.remove('show');
  });
  successOverlay?.addEventListener('click', e => {
    if (e.target === successOverlay) successOverlay.classList.remove('show');
  });
});
