const mobileMenuBtn = document.getElementById("mobile-menu-button")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})