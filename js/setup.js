'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setupBlock = document.querySelector('.setup');
var setupPlayer = document.querySelector('.setup-player');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupBlock.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
var wizards = [];
wizards.length = 4;

//  Генератор случайных чисел
var randomNumber = function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

//  Случайная выборка из массива
var getRandomWizardProp = function (sourceList) {
  var randomProp = sourceList[randomNumber(0, sourceList.length - 1)];

  return randomProp;
};

// Создаем массив с магами и их характеристиками
for (var i = 0; i < wizards.length; i++) {
  wizards[i] =
  {
    name: getRandomWizardProp(WIZARD_NAMES) + ' ' + getRandomWizardProp(WIZARD_LAST_NAMES),
    coatColor: getRandomWizardProp(WIZARD_COAT_COLORS),
    eyesColor: getRandomWizardProp(WIZARD_EYES_COLORS),
  };
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// отрисовываем магов в DOM
for (var n = 0; n < wizards.length; n++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[n].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[n].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[n].eyesColor;

  similarListElement.appendChild(wizardElement);
}

setupSimilar.classList.remove('hidden');

// открытие/закрытие окна настроек мага
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

//  меняем цвет плаща, глаз и фаерболов по клику на них
var wizardInputValueChange = function (inputName, inputValue) {
  var wizardSetupInputValue = document.querySelector('input[name=' + inputName + ']');
  wizardSetupInputValue.value = inputValue;
};

wizardCoat.addEventListener('click', function () {
  var randomColor = getRandomWizardProp(WIZARD_COAT_COLORS);
  wizardCoat.style = 'fill:' + randomColor;
  wizardInputValueChange('coat-color', randomColor);
});

wizardEyes.addEventListener('click', function () {
  var randomColor = getRandomWizardProp(WIZARD_EYES_COLORS);
  wizardEyes.style = 'fill:' + randomColor;
  wizardInputValueChange('eyes-color', randomColor);
});

wizardFireball.addEventListener('click', function () {
  var randomColor = getRandomWizardProp(WIZARD_FIREBALL_COLORS);
  wizardFireball.style = 'background:' + randomColor;
  wizardInputValueChange('fireball-color', randomColor);
});
