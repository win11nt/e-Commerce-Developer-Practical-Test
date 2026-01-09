const triggers = document.querySelectorAll('.nutritionTrigger');
const popup = document.getElementById('nutritionPopup');
const closeBtn = document.getElementById('popupClose');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });
});


closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.add('hidden');
    }
});

//Handle khi chọn radio button
const radios = document.querySelectorAll('input[name="productOption"]');
const refillTexts = document.querySelectorAll('.refill-text');

const updateRefillText = () => {
    const selected = document.querySelector('input[name="productOption"]:checked');
    const value = selected?.value;
    refillTexts.forEach(p => {
        p.classList.add('hidden');
        if (p.dataset.value === value) {
            p.classList.remove('hidden');
        }
    });
}

const updateBonus = () => {
    document.querySelectorAll('.bonus').forEach(div => {
        div.classList.remove('opacity-100');
        div.classList.add('opacity-40');
    });
    const checkedRadio = document.querySelector('input[name="productOption"]:checked');
    if (checkedRadio) {
        const label = checkedRadio.closest('label');
        const bonuses = label.querySelectorAll('.bonus');
        bonuses.forEach(div => {
            div.classList.remove('opacity-40');
            div.classList.add('opacity-100');
        });
    }
}

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        updateBonus();
        updateRefillText();
    });
});

updateBonus();
updateRefillText();