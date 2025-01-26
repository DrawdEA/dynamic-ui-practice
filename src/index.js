import "./styles.css";

/* Dropdown logic */
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownSelection = document.querySelector(".dropdown > div");

function createDropdown(button, selection) {
    button.addEventListener("click", () => {
        selection.style.display = selection.style.display === "flex" ? "none" : "flex";
        
    })
}

createDropdown(dropdownButton, dropdownSelection);

/* Image carousel logic */
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
       const offset = button.dataset.carouselButton === "next" ? 1 : -1;
       const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activefSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activefSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activefSlide.dataset.active;
    })
})

const navigations = document.querySelectorAll("[data-navigation-button]");
navigations.forEach(navigation => {
    navigation.addEventListener("click", () => {
        const slides = navigation.closest("[data-carousel]").querySelector("[data-slides]");
        const index = [...navigations].indexOf(navigation);
        const activefSlide = slides.querySelector("[data-active]");
        
        const activeNavigation = document.querySelector(".navigation").querySelector("[data-active]");
        
        // Set slide
        slides.children[index].dataset.active = true;
        delete activefSlide.dataset.active;

        // Set button visual
        navigations.children[index].dataset.active = true;
        delete activeNavigation.dataset.active;
    })
})


setInterval(() => {
    // TODO: Add automatic thing
}, 5000)