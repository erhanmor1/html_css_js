document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        if (isInViewport(animatedText)) {
            animatedText.style.animation = 'fadeInUp 1s ease forwards';
        }
    });

    // Initial check
    if (isInViewport(animatedText)) {
        animatedText.style.animation = 'fadeInUp 1s ease forwards';
    }
});