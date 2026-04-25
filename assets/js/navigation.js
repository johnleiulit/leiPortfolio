function initNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
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

    // Mobile navbar toggler
    const toggler = document.querySelector(".navbar-toggler");
    const navbarNav = document.querySelector("#navbarNav");
    const links = document.querySelectorAll(".list-inline-item a");

    toggler.addEventListener("click", function () {
        if (this.classList.contains("toggled")) {
            this.innerHTML = '<span class="navbar-toggler-icon"></span>';
            this.classList.remove("toggled");
        } else {
            this.innerHTML = '<span style="color: white; font-size: 24px;">&#10005;</span>';
            this.classList.add("toggled");
        }
    });

    links.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992) {
                navbarNav.classList.remove("show");
                toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
                toggler.classList.remove("toggled");
            }
        });
    });
}
