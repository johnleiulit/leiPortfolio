function initAnimations() {
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

    const hiddenElementsx1 = document.querySelectorAll('.hidden-1');
    hiddenElementsx1.forEach((el) => observer.observe(el));
    
    const hiddenElementsx2 = document.querySelectorAll('.hidden-2');
    hiddenElementsx2.forEach((el) => observer.observe(el));
    
    const hiddenElementsx3 = document.querySelectorAll('.hidden-3');
    hiddenElementsx3.forEach((el) => observer.observe(el));

    const hiddenElementsx4 = document.querySelectorAll('.hidden-4');
    hiddenElementsx4.forEach((el) => observer.observe(el));
}
