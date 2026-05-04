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

// Typing animation
function initTypingAnimation() {
    const texts = ["QA Automation/Manual", "Web Developer"];
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

