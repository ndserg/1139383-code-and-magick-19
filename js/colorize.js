'use strict';
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];

  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  //  меняем цвет плаща, глаз и фаерболов по клику на них
  var wizardInputValueChange = function (inputName, inputValue) {
    var wizardSetupInputValue = document.querySelector('input[name=' + inputName + ']');
    wizardSetupInputValue.value = inputValue;
  };

  wizardCoat.addEventListener('click', function () {
    var randomColor = window.util.getRandomWizardProp(COAT_COLORS);
    wizardCoat.style = 'fill:' + randomColor;
    wizardInputValueChange('coat-color', randomColor);
    wizard.onCoatChange(randomColor);
  });

  wizardEyes.addEventListener('click', function () {
    var randomColor = window.util.getRandomWizardProp(EYES_COLORS);
    wizardEyes.style = 'fill:' + randomColor;
    wizardInputValueChange('eyes-color', randomColor);
    wizard.onEyesChange(randomColor);
  });

  wizardFireball.addEventListener('click', function () {
    var randomColor = window.util.getRandomWizardProp(FIREBALL_COLORS);
    wizardFireball.style = 'background:' + randomColor;
    wizardInputValueChange('fireball-color', randomColor);
  });

  window.wizard = wizard;
})();
