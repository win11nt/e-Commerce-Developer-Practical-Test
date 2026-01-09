const toggleDropdown = (el) => {
    const parent = el.closest("div.border-r");
    const contents = parent.querySelectorAll(".dropdown-content");

    contents.forEach((content) => {
        if (content.classList.contains("max-h-0")) {
            content.classList.remove("max-h-0");
            content.classList.add("max-h-[500px]");
            content.classList.add("pt-3");
        } else {
            content.classList.remove("max-h-[500px]");
            content.classList.add("max-h-0");
            content.classList.remove("pt-3");
        }
    });
};