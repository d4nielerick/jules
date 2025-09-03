document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider Logic
    const slides = document.querySelectorAll('.hero');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        const createDots = () => {
            slides.forEach((_, i) => {
                dotsContainer.innerHTML += `<span class="dot" data-slide="${i}"></span>`;
            });
        };

        const activateDot = (slide) => {
            document.querySelectorAll('.dot').forEach(dot => {
                dot.classList.remove('active');
            });
            document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
        };

        const goToSlide = (slide) => {
            slides.forEach((s, i) => {
                s.classList.remove('active');
            });
            slides[slide].classList.add('active');
            activateDot(slide);
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
        };

        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(currentSlide);
        };

        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, 5000); // Rotate every 5 seconds
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startSlideShow();
        };

        // Event Listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                const { slide } = e.target.dataset;
                goToSlide(slide);
                currentSlide = parseInt(slide);
                resetInterval();
            }
        });

        // Initialize
        createDots();
        goToSlide(0);
        startSlideShow();
    }


    // Product filtering logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Set active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter products
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || filter === category;

                // Add a simple fade animation
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                if (shouldShow) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    // Initialize all cards to be visible
    productCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
});
