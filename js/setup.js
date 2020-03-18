'use strict';
(function () {
  var setupBlock = document.querySelector('.setup');

  // отправляем данные формы
  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setupBlock.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
