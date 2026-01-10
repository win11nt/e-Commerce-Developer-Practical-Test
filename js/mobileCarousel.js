(() => {
    const images = [
        "./images/productI-mage.webp",
        "./images/trysculptique.webp",
        "./images/trysculptique2.webp",
        "./images/trysculptique3.webp",
        "./images/trysculptique4.webp",
        "./images/trysculptique5.webp",
        "./images/trysculptique8.webp",
        "./images/trysculptique9.webp",
        "./images/trysculptique10.webp",
        "./images/trysculptique11.webp",
        "./images/trysculptique12.webp",
        "./images/trysculptique13.webp",
        "./images/trysculptique14.webp",
    ];

    const track = document.getElementById("carousel-track");
    const thumbTrack = document.getElementById("thumb-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    let thumbIndex = 0;

    function updateSlide() {
        track.style.transition = "transform 0.3s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function updateThumbs() {
        const thumbWidth = 6; // rem

        thumbTrack.style.transition = "transform 0.5s ease-in-out";
        thumbTrack.style.transform =
            `translateX(-${thumbIndex * thumbWidth}rem)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex =
            (currentIndex + 1) % images.length;

        track.style.transition = "transform 0.3s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (thumbIndex === images.length - 1) {
            thumbTrack.style.transition = "none";
            thumbIndex = -1;
            thumbTrack.style.transform =
                `translateX(-${thumbIndex * 6}rem)`;
        }

        setTimeout(() => {
            thumbTrack.style.transition = "transform 0.5s ease-in-out";
            thumbIndex++;
            updateThumbs();
        }, 20);
    });

    prevBtn.addEventListener("click", () => {
        currentIndex =
            (currentIndex - 1 + images.length) % images.length;

        track.style.transition = "transform 0.3s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (thumbIndex === 0) {
            thumbTrack.style.transition = "none";
            thumbIndex = images.length;
            thumbTrack.style.transform =
                `translateX(-${thumbIndex * 6}rem)`;
        }

        setTimeout(() => {
            thumbTrack.style.transition = "transform 0.5s ease-in-out";
            thumbIndex--;
            updateThumbs();
        }, 20);
    });

    function initTrack() {
        track.innerHTML = "";

        images.forEach(src => {
            const slide = document.createElement("div");
            slide.className = "w-full h-full flex-shrink-0";
            slide.innerHTML = `<img src="${src}" class="w-[360px] mx-auto object-contain rounded-lg" />`;
            track.appendChild(slide);
        });

        const clone = document.createElement("div");
        clone.className = "w-full h-full flex-shrink-0";
        clone.innerHTML = `<img src="${images[0]}" class="w-[360px] mx-auto object-contain rounded-lg" />`;
        track.appendChild(clone);

        currentIndex = 0;
        track.style.transform = "translateX(0)";
    }


    function initThumbs() {
        thumbTrack.innerHTML = "";

        images.forEach((src, idx) => {
            const thumb = document.createElement("img");
            thumb.src = src;
            thumb.className =
                "w-24 h-24 px-1 object-contain cursor-pointer rounded-xl flex-shrink-0";
            thumb.addEventListener("click", () => {
                currentIndex = idx;
                updateSlide();
            });
            thumbTrack.appendChild(thumb);
        });

        for (let i = 0; i < images.length; i++) {
            const clone = document.createElement("img");
            clone.src = images[i];
            clone.className =
                "w-24 h-24 px-1 object-contain cursor-pointer rounded-xl flex-shrink-0";
            thumbTrack.appendChild(clone);
        }

    }

    initTrack();
    initThumbs();
    updateSlide();
})();
