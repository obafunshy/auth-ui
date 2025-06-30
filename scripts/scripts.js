// Navigation toggle button 
const mobileMenuBtn = document.getElementById("mobile-menu-button")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})

// Lightbox buttons
const filterButtons = document.querySelectorAll('.filter-btn')
const projectItems = document.querySelectorAll('.project-item')

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            const category = item.getAttribute('data-category')

            if(filter === 'all' || category === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        })

        // Update button active styles
        filterButtons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
        });

        button.classList.remove('bg-gray-200', 'text-gray-700');
        button.classList.add('bg-blue-600', 'text-white');
    });

})



