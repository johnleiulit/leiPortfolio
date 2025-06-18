document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust for navbar height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

//scroll animation
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElementsx1 = document.querySelectorAll('.hidden-1');
hiddenElementsx1.forEach((el) => observer.observe(el));
const hiddenElementsx2 = document.querySelectorAll('.hidden-2');
hiddenElementsx2.forEach((el) => observer.observe(el));
const hiddenElementsx3 = document.querySelectorAll('.hidden-3');
hiddenElementsx3.forEach((el) => observer.observe(el));



document.addEventListener('DOMContentLoaded', function() {
  // Image modal functionality
  const carouselImages = document.querySelectorAll('.carousel-item img');
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  carouselImages.forEach(image => {
    image.style.cursor = 'pointer';
    
    image.addEventListener('click', function() {
      modalImage.src = this.src;
      const modal = new bootstrap.Modal(imageModal);
      modal.show();
    });
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme;
    
    if (currentTheme === 'dark') {
      newTheme = '';
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
      newTheme = 'dark';
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const animatedElements = document.querySelectorAll(
    '.hidden-1, .hidden-2, .hidden-3'
  );
  
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

const toggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector("#navbarNav");
const links = document.querySelectorAll(".list-inline-item a");

// Toggle "X" icon when clicking the navbar toggler
toggler.addEventListener("click", function () {
    if (this.classList.contains("toggled")) {
        this.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Restore default icon
        this.classList.remove("toggled");
    } else {
        this.innerHTML = '<span style="color: white; font-size: 24px;">&#10005;</span>'; // "X" icon
        this.classList.add("toggled");
    }
});

// Close navbar when clicking a link & restore the toggler icon
links.forEach(link => {
    link.addEventListener("click", function () {
        if (window.innerWidth < 992) { // Only close for mobile view
            navbarNav.classList.remove("show");
            toggler.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Reset icon
            toggler.classList.remove("toggled");
        }
    });
});

