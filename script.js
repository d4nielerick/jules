document.addEventListener('DOMContentLoaded', () => {
    // Hero section animation
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(20px)';
        hero.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        setTimeout(() => {
            hero.style.opacity = 1;
            hero.style.transform = 'translateY(0)';
        }, 100);
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
