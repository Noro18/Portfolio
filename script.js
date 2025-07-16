
      // Navigation active link
      const navLinks = document.querySelectorAll(".nav-link");
      const sections = document.querySelectorAll("section");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

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
      });

      // Mobile Menu Toggle
      const mobileToggle = document.getElementById("mobile-toggle");
      const navList = document.getElementById("nav-list");

      mobileToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
        mobileToggle.innerHTML = navList.classList.contains("show")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking a link
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navList.classList.remove("show");
          mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Sticky Header
      const header = document.getElementById("header");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Scroll Animations
      const fadeElements = document.querySelectorAll(
        ".fade-in, .slide-in-left, .slide-in-right"
      );

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
      const backToTop = document.getElementById("backToTop");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTop.classList.add("show");
        } else {
          backToTop.classList.remove("show");
        }
      });

      backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
