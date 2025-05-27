document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = 100 / slides.length;
    let currentPosition = 0;

    function moveSlides() {
        currentPosition -= slideWidth;
        container.style.transform = `translateX(${currentPosition}%)`;
        
        // Quand on atteint le clone, on reset sans transition
        if (currentPosition <= -((slides.length - 1) * slideWidth)) {
            setTimeout(() => {
                container.style.transition = 'none';
                currentPosition = 0;
                container.style.transform = `translateX(${currentPosition}%)`;
                setTimeout(() => {
                    container.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    // Défilement automatique toutes les 3 secondes
    setInterval(moveSlides, 3000);
});