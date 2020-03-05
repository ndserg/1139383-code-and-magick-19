'use strict';
(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');

  //  меняем цвет плаща, глаз и фаерболов по клику на них
  var wizardInputValueChange = function (inputName, inputValue) {
    var wizardSetupInputValue = document.querySelector('input[name=' + inputName + ']');
    wizardSetupInputValue.value = inputValue;
  };

  wizardCoat.addEventListener('click', function () {
    var randomColor = window.util.getRandomWizardProp(window.WIZARD_COAT_COLORS);
    wizardCoat.style = 'fill:' + randomColor;
    wizardInputValueChange('coat-color', randomColor);
  });

  wizardEyes.addEventListener('click', function () {
    var randomColor = window.util.getRandomWizardProp(window.WIZARD_EYES_COLORS);
    wizardEyes.style = 'fill:' + randomColor;
    wizardInputValueChange('eyes-color', randomColor);
  });

  wizardFireball.addEventListener('click', function () {
    var randomColor = window.util.getRandomWizardProp(WIZARD_FIREBALL_COLORS);
    wizardFireball.style = 'background:' + randomColor;
    wizardInputValueChange('fireball-color', randomColor);
  });
})();
