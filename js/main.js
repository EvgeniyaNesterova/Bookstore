$(document).ready(function () {

const genresSwiper = new Swiper('.genres-slider', {
  // Optional parameters
  loop: true,
  speed: 500,
  slidesPerView: 4,
  stopOnLastSlide: true,
  watchOverflow: true,
  watchSlidesProgress: true,

  // Navigation arrows
  navigation: {
    nextEl: '.genres-slider-button--next',
    prevEl: '.genres-slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    sensitivity: 1,
  }
});

const unpublishedSwiper = new Swiper('.unpublished-swiper', {
  // Optional parameters
  loop: true,
  speed: 500,
  slidesPerView: 5,
  stopOnLastSlide: true,
  watchOverflow: true,
  watchSlidesProgress: true,

  // Navigation arrows
  navigation: {
    nextEl: '.unpublished-slider-button--next',
    prevEl: '.unpublished-slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    sensitivity: 1,
  },
  breakpoints: {
          1440: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2.5,
          },
          640: {
            slidesPerView: 1,
          },
        },
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal)

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}

var modalOverlay = $('.modal__overlay');
var modalDialog = $('.modal__dialog');
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }
});

$('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Укажите ваше имя",
      minlength: "Укажите полное имя"
    },
    email: {
      required: "Укажите ваш email",
    },
    phone: {
      required: "Укажите номер телефона",
      minlength: "Должен состоять из 11 цифр"
    },
    
  },
  });
  });
  $(document).ready(function(){
  $("#phone").mask("+7(999) 999-9999");
  });

  var heartIcon = $(".icon");
heartIcon.on("click", function () {
  $(this).toggleClass("icon-red");
});
});