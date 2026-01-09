const toggleBtn = document.getElementById('toggleFormBtn');
const reviewForm = document.getElementById('reviewForm');
const cancelBtn = document.getElementById('cancelFormBtn');

let isOpen = false;

const openForm = () => {
    reviewForm.classList.remove('max-h-0');
    reviewForm.classList.add('max-h-[1000px]');
    toggleBtn.textContent = "Cancel review";
    isOpen = true;
}

const closeForm = () => {
    reviewForm.classList.remove('max-h-[1000px]');
    reviewForm.classList.add('max-h-0');
    toggleBtn.textContent = "Write a review";
    isOpen = false;
}

toggleBtn.addEventListener('click', () => {
    if (!isOpen) {
        openForm();
    } else {
        closeForm();
    }
});

cancelBtn.addEventListener('click', () => {
    closeForm();
});