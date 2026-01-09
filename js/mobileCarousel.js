(() => {
    const images = [
        "./images/productI-mage.webp",
        "./images/trysculptique.webp",
        "./images/trysculptique2.webp",
        "./images/trysculptique3.webp",
        "./images/trysculptique4.webp",
        "./images/trysculptique5.webp",
        "./images/trysculptique6.png",
        "./images/trysculptique7.png"
    ];

    const track = document.getElementById("carousel-track");
    const thumbTrack = document.getElementById("thumb-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateThumbs();
    }

    function updateThumbs() {
        // dịch chuyển thumbnail track theo currentIndex
        thumbTrack.style.transform = `translateX(-${currentIndex * 6}rem)`; // 6rem ~ width của mỗi thumb (w-24)
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    });

    function initTrack() {
        track.innerHTML = "";
        images.forEach((src, i) => {
            const slide = document.createElement("div");
            slide.className = "w-full h-full flex-shrink-0 relative";

            const img = document.createElement("img");
            img.src = src;
            img.className = "rounded-lg w-[360px] h-auto object-contain mx-auto";

            slide.appendChild(img);

            if (i === 0) {
                const sticker = document.createElement("img");
                sticker.src = "./images/saleSticker.avif";
                sticker.className = "absolute top-4 right-4 w-20 h-20";
                slide.appendChild(sticker);

                const popupBtn = document.createElement("div");
                popupBtn.className =
                    "nutritionTrigger absolute bottom-6 border border-black left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 px-6 py-2 rounded-full shadow-md cursor-pointer";
                popupBtn.style =
                    "background-color:#FFFFFFD9;color:#000000BF;font-family:'Montserrat';font-size:14px;";
                popupBtn.innerHTML = `
          <img src="./images/leavesProduct.png" class="w-6 h-6 object-contain" />
          <span class="whitespace-nowrap leading-none">Nutritional Information</span>
        `;
                popupBtn.addEventListener("click", () => {
                    document.getElementById("nutritionPopup").classList.remove("hidden");
                });

                slide.appendChild(popupBtn);
            }

            track.appendChild(slide);
        });
    }

    function initThumbs() {
        thumbTrack.innerHTML = "";
        images.forEach((src, idx) => {
            const thumb = document.createElement("img");
            thumb.src = src;
            thumb.className = "w-21 px-1 h-21 object-contain cursor-pointer rounded-xl flex-shrink-0";
            thumb.addEventListener("click", () => {
                currentIndex = idx;
                updateSlide();
            });
            thumbTrack.appendChild(thumb);
        });
    }

    initTrack();
    initThumbs();
    updateSlide();
})();
