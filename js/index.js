

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  const links = document.querySelectorAll(".nav-links a");
  let path = window.location.pathname;

  if (path === "/" || path === "") {
    path = "index.html";
  } else {
    path = path.split("/").pop();
  }

  links.forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
