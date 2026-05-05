let currentModalBox = null;
let currentModalCarouselId = null;

function openProjModal(imgBox) {
    const modal = document.getElementById('projModal');
    const modalImg = document.getElementById('projModalImg');
    const modalCaption = document.getElementById('projModalCaption');
    
    const visibleImg = imgBox.querySelector('.proj-img.show');
    
    if (visibleImg && visibleImg.tagName === 'IMG') {
        currentModalBox = imgBox;
        currentModalCarouselId = imgBox.closest('.proj-inner-carousel').id;
        
        modal.style.display = 'flex';
        modalImg.src = visibleImg.src;
        
        const carouselId = currentModalCarouselId;
        if (imgLabels[carouselId]) {
            modalCaption.textContent = imgLabels[carouselId][imgIdx[carouselId]];
        }
        
        updateModalNavButtons();
        
        document.body.style.overflow = 'hidden';
    }
}

function closeProjModal() {
    const modal = document.getElementById('projModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentModalBox = null;
    currentModalCarouselId = null;
}

function navigateModalImage(direction) {
    if (!currentModalCarouselId) return;
    
    const modalImg = document.getElementById('projModalImg');
    const modalCaption = document.getElementById('projModalCaption');
    const carouselId = currentModalCarouselId;
    
    const box = document.getElementById(carouselId);
    const imgs = box.querySelectorAll('.proj-img');
    const dots = document.getElementById(carouselId + '-dots').querySelectorAll('.pdot');
    const lbl = document.getElementById(carouselId + '-lbl');
    
    imgs[imgIdx[carouselId]].classList.remove('show');
    dots[imgIdx[carouselId]].classList.remove('on');
    
    imgIdx[carouselId] = (imgIdx[carouselId] + direction + imgs.length) % imgs.length;
    
    imgs[imgIdx[carouselId]].classList.add('show');
    dots[imgIdx[carouselId]].classList.add('on');
    
    if (imgLabels[carouselId]) {
        lbl.textContent = imgLabels[carouselId][imgIdx[carouselId]];
    }
    
    modalImg.src = imgs[imgIdx[carouselId]].src;
    if (imgLabels[carouselId]) {
        modalCaption.textContent = imgLabels[carouselId][imgIdx[carouselId]];
    }
    
    updateModalNavButtons();
}

function updateModalNavButtons() {
    if (!currentModalCarouselId) return;
    
    const carouselId = currentModalCarouselId;
    const box = document.getElementById(carouselId);
    const imgs = box.querySelectorAll('.proj-img');
    const currentIndex = imgIdx[carouselId];
    
    const prevBtn = document.getElementById('projModalPrev');
    const nextBtn = document.getElementById('projModalNext');
    
    if (imgs.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjModal();
    }

    if (document.getElementById('projModal').style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            navigateModalImage(-1);
        } else if (event.key === 'ArrowRight') {
            navigateModalImage(1);
        }
    }
});
