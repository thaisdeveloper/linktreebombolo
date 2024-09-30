let currentIndex = 0;
const visibleImages = 4;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.carousel img').length;

    // Calcula o índice máximo e mínimo
    const maxIndex = Math.floor((totalImages - visibleImages) / visibleImages) * visibleImages;
    currentIndex += direction * visibleImages;

    // Limita o índice para que não saia do limite
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    // Calcula o valor da translação com base na largura da imagem e no índice atual
    const imageWidth = document.querySelector('.carousel img').offsetWidth;
    carousel.style.transform = `translateX(${-currentIndex * (imageWidth + 10)}px)`;
}
let testimonialIndex = 0;

function showTestimonials(n) {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const carousel = document.querySelector('.testimonials-carousel');

    testimonialIndex += n;

    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }
    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }

    const translateX = -testimonialIndex * 100 / testimonials.length;
    carousel.style.transform = `translateX(${translateX}%)`;
}

document.querySelector('.prev-testimonial').addEventListener('click', () => {
    showTestimonials(-1);
});

document.querySelector('.next-testimonial').addEventListener('click', () => {
    showTestimonials(1);
});
