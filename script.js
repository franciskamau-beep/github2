// script.js - shared across pages

// Greeting alert required by spec
window.addEventListener('load', function () {
  try {
    alert('hello client');
  } catch (e) {
    // ignore if alerts are blocked
    console.warn('alert blocked or unavailable');
  }

  // set year in multiple places
  const y = new Date().getFullYear();
  const ids = ['year','year-2','year-3','year-4','year-5'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });
});
