'use strict';
(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template');

  // отрисовываем магов в DOM
  var renderWizard = function (wizard) {

    var element = similarWizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  // загружаем данные магов
  window.render = function (data) {
    similarListElement.innerHTML = '';
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    setupSimilar.classList.remove('hidden');
  };
})();
