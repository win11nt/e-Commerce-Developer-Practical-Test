const stars = document.querySelectorAll('#star-rating button');
let selectedIndex = -1;

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
            const icon = s.firstElementChild;
            if (i <= index) {
                icon.classList.replace('far', 'fas');
            } else {
                icon.classList.replace('fas', 'far');
            }
        });
    });

    star.addEventListener('mouseout', () => {
        stars.forEach((s, i) => {
            const icon = s.firstElementChild;
            if (i <= selectedIndex) {
                icon.classList.replace('far', 'fas');
            } else {
                icon.classList.replace('fas', 'far');
            }
        });
    });

    star.addEventListener('click', () => {
        selectedIndex = index;
        stars.forEach((s, i) => {
            const icon = s.firstElementChild;
            if (i <= selectedIndex) {
                icon.classList.replace('far', 'fas');
            } else {
                icon.classList.replace('fas', 'far');
            }
        });
    });
});