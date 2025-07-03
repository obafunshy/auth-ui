// Mobile Dropdown toggle 

function toggleMobileDropdown() {
    const dropdown = document.getElementById("mobile-home-dropdown");
    dropdown.classList.toggle("hidden");
  }

// Open Modal 
document.addEventListener("DOMContentLoaded", function () {
        const openModalBtn = document.getElementById('openModal');
        const closeModalBtn = document.getElementById('closeModal');
        const quoteModal = document.getElementById("quoteModal");

        openModalBtn.addEventListener('click', () => {
        quoteModal.classList.remove('hidden');
        });

        closeModalBtn.addEventListener('click', () => {
        quoteModal.classList.add('hidden');
        });

        quoteModal.addEventListener("click", (e) => {
            if (e.target === quoteModal) {
            quoteModal.classList.add("hidden");
            }
        })

        window.addEventListener('click', (e) => {
        if (e.target === quoteModal) {
            quoteModal.classList.add('hidden');
        }
        });

        // close on outside click
        document.getElementById("quoteModal").addEventListener("click", function (e) {
            if (e.target === this) {
                this.classList.add("hidden");
            }
        });

})

// Owl Slider 
 $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      items: 1,
      nav: false,
      dots: true,
    });
  });

// Owl testimonial
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 30,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 }
    }
  });
});
 

