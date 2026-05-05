function openCertModal(imageSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certModalImg');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    
    // Force perfect centering via JS
    modalImg.style.position = 'absolute';
    modalImg.style.top = '50%';
    modalImg.style.left = '50%';
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '85vh';
    modalImg.style.objectFit = 'contain';
    
    // Reset animation so it replays every time modal opens
    modalImg.style.animation = 'none';
    modalImg.offsetHeight; // force reflow
    modalImg.style.animation = 'zoomIn 0.3s ease forwards';
    
    document.body.style.overflow = 'hidden';
}
function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCertModal();
    }
});
