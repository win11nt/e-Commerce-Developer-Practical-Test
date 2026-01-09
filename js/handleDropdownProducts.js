document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('img');

        if (content.classList.contains('max-h-[1000px]')) {
            content.classList.remove('max-h-[1000px]', 'mt-3');
            content.classList.add('max-h-0');
            icon.classList.remove('rotate-45');
            item.classList.remove('active');
            item.classList.remove('border-[#039869]');
            item.classList.add('border-[#d2d2d2]');
        } else {
            content.classList.remove('max-h-0');
            content.classList.add('max-h-[1000px]', 'mt-3');
            icon.classList.add('rotate-45');
            item.classList.add('active');
            item.classList.remove('border-[#d2d2d2]');
            item.classList.add('border-[#039869]');
        }
    });
});