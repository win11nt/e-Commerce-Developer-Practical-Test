document.querySelectorAll(".faq-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector("svg");

        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
            // đóng
            content.style.maxHeight = "0px";
            icon.classList.remove("rotate-180");
        } else {
            // mở
            content.style.maxHeight = content.scrollHeight + "px";
            icon.classList.add("rotate-180");
        }
    });
});
