function headerMenu() {
  let menuButton = document.querySelector('.js-header-mobile-menu');
  let headerNavMenu = document.querySelector('.js-header-navigation-menu');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      headerNavMenu.classList.toggle('active');
    });
  }
}
function headerLocation() {
  let locationButton = document.querySelector('.js-header-location-button');
  let locationItemsWrapper = document.querySelector('.js-header-sity-list-wrapper');
  let sityButtons = document.querySelectorAll('.js-header-sity-choose');
  if (locationButton) {
    locationButton.addEventListener('click', () => {
      locationButton.classList.toggle('active');
      locationItemsWrapper.classList.toggle('active');
    });
  }
  if (sityButtons) {
    sityButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.header__sity-button_active').classList.remove('header__sity-button_active');
        locationButton.querySelector('span').innerHTML = button.textContent.trim();
        locationItemsWrapper.classList.remove('active');
        locationButton.classList.remove('active');
        button.classList.add('header__sity-button_active');
      });
    });
  }
}
function heroAccessoriesFirmSlider() {
  let heroSlider = document.querySelector('.js-hero-slider');
  if (heroSlider) {
    const heroSlider = new Swiper('.js-hero-slider', {
      loop: true,
      autoplay: {
        delay: 2500
      },
      allowTouchMove: false
    });
  }
}
function kitchenCatalogLiders() {
  let kitchenSliders = document.querySelectorAll('.js-kitchen-slider');
  if (kitchenSliders) {
    kitchenSliders.forEach((slider, index) => {
      slider.classList.add(`js-kitchen-slider-number-${index}`);
      slider.nextElementSibling.querySelector('.js-kitchen-nav-button-prev').classList.add(`js-kitchen-nav-button-prev-${index}`);
      slider.nextElementSibling.querySelector('.js-kitchen-nav-button-next').classList.add(`js-kitchen-nav-button-next-${index}`);
      new Swiper(`.js-kitchen-slider-number-${index}`, {
        navigation: {
          nextEl: `.js-kitchen-nav-button-next-${index}`,
          prevEl: `.js-kitchen-nav-button-prev-${index}`
        }
      });
    });
  }
}
function kitchensSort() {
  let sortButtons = document.querySelectorAll('.js-kitchens-sort');
  if (sortButtons) {
    sortButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.js-kitchens-sort.active').classList.remove('active');
        button.classList.add('active');
      });
    });
  }
}
function kitchensSortMobile() {
  let mobileSortButton = document.querySelector('.js-kitchens-sort-mobile-menu');
  let mobileTypeSort = document.querySelectorAll('.js-sort-mobile-button');
  if (mobileSortButton) {
    mobileSortButton.addEventListener('click', () => {
      console.log(mobileSortButton.parentNode);
      mobileSortButton.parentNode.classList.toggle('active');
    });
  }
  if (mobileTypeSort) {
    mobileTypeSort.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.js-sort-mobile-button.active').classList.remove('active');
        button.classList.add('active');
        mobileSortButton.querySelector('span').innerHTML = button.innerHTML;
        if (mobileSortButton.parentNode.classList.contains('active')) {
          mobileSortButton.parentNode.classList.remove('active');
        }
      });
    });
  }
}
function howToContact() {
  let howToContactButtons = document.querySelectorAll('.js-quize-how-to-contact');
  howToContactButtons.forEach(contactButton => {
    contactButton.addEventListener('click', () => {
      if (contactButton.classList.contains('active')) {
        contactButton.nextElementSibling.value = 'WhatsApp';
      } else {
        contactButton.nextElementSibling.value = 'tel';
      }
      contactButton.classList.toggle('active');
    });
  });
}
function reviewsSwiper() {
  if (document.querySelector('.js-reviews-swiper')) {
    console.log('sss');
    const reviewSwiper = new Swiper('.js-reviews-swiper', {
      // loop: true,
      navigation: {
        nextEl: '.js-reviews-button-next',
        prevEl: '.js-reviews-button-prev'
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        1400: {
          spaceBetween: 20
        },
        900: {
          slidesPerView: 2.3
        },
        760: {
          slidesPerView: 2.1,
          spaceBetween: 20
        },
        0: {
          slidesPerView: 1
        }
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  headerMenu();
  headerLocation();
  heroAccessoriesFirmSlider();
  kitchensSort();
  kitchenCatalogLiders();
  kitchensSortMobile();
  howToContact();
  reviewsSwiper();
  if (document.querySelector('.js-kitchen-info-slider')) {
    const kitchenPreviewSlider = new Swiper('.js-kitchen-info-slider', {
      loop: true,
      navigation: {
        nextEl: '.js-kitchen-info-button-next',
        prevEl: '.js-kitchen-info-button-prev'
      }
    });
  }
});