import "./styles.css";

// Dropdown logic
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownSelection = document.querySelector(".dropdown > div");

function createDropdown(button, selection) {
    button.addEventListener("click", () => {
        console.log("HA");
        selection.style.display = selection.style.display === "flex" ? "none" : "flex";
        
    })
}

createDropdown(dropdownButton, dropdownSelection);

// Image carousel logic

// Scrolls to an image immediately
function scrollToNextImage() {
    const slides = document.querySelector(".carousel").closest("[data-carousel]").querySelector("[data-slides]");
    const navigationMain = document.querySelector(".navigation")
    const activeNavigation = navigationMain.querySelector("[data-active]");

    const activefSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activefSlide) + 1;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activefSlide.dataset.active;

    navigationMain.children[newIndex].dataset.active = true;
    delete activeNavigation.dataset.active;
}

let timer = setInterval(scrollToNextImage, 5000);

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
       const offset = button.dataset.carouselButton === "next" ? 1 : -1;
       const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
       const navigationMain = document.querySelector(".navigation")
       const activeNavigation = navigationMain.querySelector("[data-active]");

        const activefSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activefSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activefSlide.dataset.active;

        navigationMain.children[newIndex].dataset.active = true;
        delete activeNavigation.dataset.active;

        clearInterval(timer)
        timer = setInterval(scrollToNextImage, 5000);
    })
})

const navigations = document.querySelectorAll("[data-navigation-button]");
navigations.forEach(navigation => {
    navigation.addEventListener("click", () => {
        const slides = navigation.closest("[data-carousel]").querySelector("[data-slides]");
        const index = [...navigations].indexOf(navigation);
        const activefSlide = slides.querySelector("[data-active]");
        const navigationMain = document.querySelector(".navigation")
        const activeNavigation = navigationMain.querySelector("[data-active]");
        
        // Set slide
        slides.children[index].dataset.active = true;
        delete activefSlide.dataset.active;

        // Set button visual
        navigationMain.children[index].dataset.active = true;
        delete activeNavigation.dataset.active;
    })
})