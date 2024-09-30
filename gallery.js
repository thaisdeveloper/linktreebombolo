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
let currentIndex = 0;
const visibleTestimonials = 1; // Altere este valor se quiser mostrar mais depoimentos por vez

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalTestimonials = document.querySelectorAll('.testimonial-item').length;

    // Calcula o índice máximo e mínimo
    const maxIndex = Math.floor(totalTestimonials - visibleTestimonials);
    currentIndex += direction; // Aumenta ou diminui o índice

    // Limita o índice para que não saia do limite
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    // Calcula a largura de cada item e aplica a transformação
    const testimonialWidth = document.querySelector('.testimonial-item').offsetWidth;
    carousel.style.transform = `translateX(${-currentIndex * testimonialWidth}px)`;
}
