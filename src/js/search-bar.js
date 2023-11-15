document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-button");
    const cancelButton = document.querySelector(".cancel-button");
    const searchBox = document.querySelector(".search-box");
    const searchInput = document.querySelector("input");

    searchButton.onclick = () => {
        searchBox.classList.add("active");
        searchInput.classList.add("active");
        searchButton.classList.add("active");
        cancelButton.classList.add("active");
    };

    cancelButton.onclick = () => {
        searchBox.classList.remove("active");
        searchInput.classList.remove("active");
        searchButton.classList.remove("active");
        cancelButton.classList.remove("active");
    };
});
