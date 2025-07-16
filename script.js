
      // Navigation active link
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const header = document.getElementById("header");
const fadeElements = document.querySelectorAll(
  ".fade-in, .slide-in-left, .slide-in-right"
);
const backToTop = document.getElementById("backToTop");

// Debounce utility
function debounce(func, wait = 20, immediate = false) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function handleScroll() {
  // Navigation active link
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });

  // Sticky Header
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Scroll Animations
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.85
    ) {
      element.classList.add("visible");
    }
  });

  // Back to Top Button
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

// Initial scan
handleScroll();
window.addEventListener("scroll", debounce(handleScroll, 50));

      // Mobile Menu Toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navList = document.getElementById("nav-list");
mobileToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
  mobileToggle.innerHTML = navList.classList.contains("show")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

      // Sticky Header
      // ...existing code...

      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Scroll Animations
      // ...existing code...

      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
      };

      const scanElements = () => {
        fadeElements.forEach((element) => {
          if (isInViewport(element)) {
            element.classList.add("visible");
          }
        });
      };

      // Initial scan
      scanElements();

      // Scan on scroll
      window.addEventListener("scroll", scanElements);

      // Back to Top Button
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
