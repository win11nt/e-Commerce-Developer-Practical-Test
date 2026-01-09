const today = new Date();
const deliveryDate = new Date(today);

deliveryDate.setDate(today.getDate() + 5);

const options = { weekday: 'long', day: 'numeric', month: 'long' };
const formatted = deliveryDate.toLocaleDateString('en-US', options);

document.getElementById('delivery-date').textContent = formatted;