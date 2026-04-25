// Image modal functionality
function initModal() {
    const carouselImages = document.querySelectorAll('.carousel-item img');
    const imageModal = document.getElementById('imageModal');
    
    if (!imageModal) return; // Exit if modal doesn't exist
    
    const modalImage = document.getElementById('modalImage');
    
    carouselImages.forEach(image => {
        image.style.cursor = 'pointer';
        
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            const modal = new bootstrap.Modal(imageModal);
            modal.show();
        });
    });
}
