$(document).ready(function () {

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