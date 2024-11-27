// Show search form and overlay
const triggerOpen = document.querySelectorAll('.trigger-button');
const triggerClose = document.querySelectorAll(".close-button");
const overlay = document.querySelector('[data-overlay]');
const searchMenu = document.querySelector('.search-float');
const cartMenu = document.querySelector('.cart-menu');
const sortMenu = document.querySelectorAll('.sorting');
const sideBarFilter = document.querySelector('#siderbar-filter');

triggerOpen.forEach((button) => {
    button.addEventListener('click', () => handleButtonClick(button.dataset.target));
});

triggerClose.forEach((button) => {
    button.addEventListener('click', closeAllMenus);
});

function handleButtonClick(target) {
    switch (target) {
        case 'search':
            overlay.classList.add("active");
            searchMenu.classList.add("showmenu");
            break;
        case 'cart':
            cartMenu.classList.add("active");
            break;
        case 'sort':
            sortMenu.classList.add("active");
            break;
        case 'sidebar':
            sideBarFilter.classList.toggle("active");
            break;
        default:
            break;
    }
}

function closeAllMenus() {
    overlay.classList.remove("active");
    searchMenu.classList.remove("showmenu");
    cartMenu.classList.remove("active");
    sortMenu.forEach(menu => menu.classList.remove("active"));
    sideBarFilter.classList.remove("active");
}

// ---------------------------------------------------- end for search---------------------------
// mobile menu

// Mobile menu
const menuClassButton = document.querySelector('.menu-trigger');
const menuSub = document.querySelector('.mobile-menu');
const menuSubClose = document.querySelector('.close-trigger');

menuClassButton.addEventListener('click', () => {
    menuSub.classList.toggle('active');
});

menuSubClose.addEventListener('click', () => {
    menuSub.classList.remove('active');
});

// Mobile submenu toggle
const subMenuItems = document.querySelectorAll('.child-trigger');
subMenuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.closest('.has-child');
        parent.classList.toggle('active');
        subMenuItems.forEach(item => {
            if (item !== this) item.closest('.has-child').classList.remove('active');
        });
    });
});


// mobule menu submenu
const subMenu = document.querySelectorAll('.child-trigger');
subMenu.forEach((menu) => menu.addEventListener('click', function (e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if (this.closest('.has-child').classList != 'active') {
        this.closest('.has-child').classList.toggle('active');
    }
}));

// ---------------------------------------------------- end for mobile menu---------------------------
// ---------------------------------------------------- start cart-menu---------------------------

// ---------------------------------------------------- end for cart-menu---------------------------



// slider

// Main image gallery with thumbnails
const thumbImage = new Swiper('.thumbnail-image', {
    direction: 'vertical', 
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: false,
    clickable: true,
    watchSlidesProgress: true,
});

const mainImage = new Swiper('.main-image', {
    loop: true,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: thumbImage, // Link main image with thumbnail swiper
    },
});



// ---------------------------------------------------- end for  swiper slider---------------------------

const sorter = document.querySelector('.sort-list');

if (sorter) {
    const sortLi = document.querySelectorAll(' .slider li');
    sorter.querySelector('.opt-trigger').addEventListener('click', function () {
        sorter.querySelector('ul').classList.toggle('show');
    });
    sortLi.forEach((item) => item.addEventListener('click', function () {
        sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
        sorter.querySelector('ul').classList.toggle('show');

    }));
};

// tabbed
// Tabbed content
const triggers = document.querySelectorAll('.tabbed-trigger');
const contents = document.querySelectorAll('.tabbed > div');

triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
        const targetId = this.dataset.id;
        const targetContent = document.querySelector(`#${targetId}`);

        triggers.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        this.classList.add('active');
        targetContent.classList.add('active');
    });
});


// ---------------------------------------               ------------------------------------------
// product image > page single


document.querySelectorAll('.dot-info h3 a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = event.target.closest('a').href; // Navigate to the blog post
    });
});


// -------------------------------------------------------------carousel swiper ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.carouselbox', {
        loop: true, // Infinite looping of slides
        slidesPerView: 3, // Adjust this value based on your design
        spaceBetween: 10, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // Responsive adjustments for smaller screens
            768: {
                slidesPerView: 4, // Show 2 slides on tablets
            },
            480: {
                slidesPerView: 1, // Show 1 slide on mobile
            },
        },
    });
});

  