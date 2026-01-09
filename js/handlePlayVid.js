document.querySelectorAll(".group").forEach((container) => {
    const video = container.querySelector("video");
    const icon = container.querySelector(".play-icon");

    container.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            if (icon) icon.style.display = "none";
        } else {
            video.pause();
            video.currentTime = 0;
            if (icon) icon.style.display = "block";
        }
    });
});