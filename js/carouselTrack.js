const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevVideoBtn");
const nextBtn = document.getElementById("nextVideoBtn");
const dotsContainer = document.getElementById("dots");

const totalItems = track.children.length;
const visibleItems = 4;
const totalPages = totalItems - visibleItems + 1;

let currentIndex = 0;

const getItemWidth = () => {
    const firstItem = track.children[0];
    const style = window.getComputedStyle(firstItem);
    const marginRight = parseInt(style.marginRight) || 0;
    return firstItem.offsetWidth + marginRight;
};

const updateCarousel = () => {
    const itemWidth = getItemWidth();
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    dots.forEach((dot, i) => {
        dot.classList.remove("bg-green-600");
        dot.classList.add("bg-gray-400");
        if (i === currentIndex) dot.classList.add("bg-green-600");
    });
};

// tạo thanh indicator động
for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.className = "dot w-10 lg:w-50 h-1 bg-gray-400 cursor-pointer";
    dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
}
const dots = dotsContainer.querySelectorAll(".dot");

// nút next/prev
nextBtn.addEventListener("click", () => {
    console.log('dkmm')
    currentIndex = (currentIndex + 1) % totalPages;
    updateCarousel();
});
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalPages) % totalPages;
    updateCarousel();
});

// drag/swipe
let isDown = false;
let startX;
track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
});
track.addEventListener("mouseup", (e) => {
    if (!isDown) return;
    isDown = false;
    const diff = e.pageX - startX;
    if (diff < -50 && currentIndex < totalPages - 1) {
        currentIndex++;
    } else if (diff > 50 && currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
});
track.addEventListener("mouseleave", () => {
    isDown = false;
});

// init
updateCarousel();
