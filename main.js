// Hamburger menu for small screens
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Simple testimonial slider
  const testimonials = document.querySelectorAll('.testimonial');
  let current = 0;
  function showTestimonial(idx) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });
  }
  document.getElementById('nextTestimonial').addEventListener('click', function() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });
  document.getElementById('prevTestimonial').addEventListener('click', function() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });
  showTestimonial(current);
});
