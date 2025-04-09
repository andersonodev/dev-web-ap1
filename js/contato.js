// JavaScript para o menu responsivo e o formulário de contato
    document.addEventListener("DOMContentLoaded", () => {
      const toggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");
      const form = document.querySelector("form");
      const popup = document.getElementById("popup-confirmacao");
      const fecharPopup = document.getElementById("fechar-popup");

      toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      const links = document.querySelectorAll('.nav-links a');
      const current = window.location.pathname.split('/').pop();
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === current);
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        popup.classList.remove("hidden");
        form.reset();
      });

      fecharPopup.addEventListener("click", () => {
        popup.classList.add("hidden");
      });
    });