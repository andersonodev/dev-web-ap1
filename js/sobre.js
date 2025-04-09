

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop();
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });
});
