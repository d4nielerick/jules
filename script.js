document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(20px)';
    hero.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    setTimeout(() => {
        hero.style.opacity = 1;
        hero.style.transform = 'translateY(0)';
    }, 100);
});
