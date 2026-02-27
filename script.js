document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.replace("dark-mode", "light-mode");
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.replace("light-mode", "dark-mode");
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });

  // Mobile Menu Logic (Future proofing)
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Add custom styling toggle for mobile menu if needed
    });
  }

  // Scroll Animation Observer
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".glass, .section-title, .timeline-item").forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
});
