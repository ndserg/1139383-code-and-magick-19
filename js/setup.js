'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var setupBlock = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var wizards = [];
wizards.length = 4;

setupBlock.classList.remove('hidden');


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
