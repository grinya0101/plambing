const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');
const year = document.getElementById('year');
const form = document.getElementById('leadForm');
const statusBox = document.getElementById('formStatus');

if (year) year.textContent = new Date().getFullYear();

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function setStatus(message, type) {
  if (!statusBox) return;
  statusBox.textContent = message;
  statusBox.className = `form-status ${type}`;
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const endpoint = form.getAttribute('action')?.trim();

    if (!endpoint) {
      setStatus('Demo mode: connect this form to Formspree, Make.com, Netlify Forms, or your own backend before running paid traffic.', 'error');
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;

    try {
      const payload = new FormData(form);
      const response = await fetch(endpoint, {
        method: 'POST',
        body: payload,
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');

      form.reset();
      setStatus('Thank you. Your roofing request has been submitted.', 'success');
    } catch (error) {
      setStatus('Submission failed. Please try again or contact the site owner.', 'error');
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
