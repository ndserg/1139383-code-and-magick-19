'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
window.WIZARD_COAT_COLORS = WIZARD_COAT_COLORS;
window.WIZARD_EYES_COLORS = WIZARD_EYES_COLORS;

var setupSimilar = document.querySelector('.setup-similar');
var wizards = [];
wizards.length = 4;

// Создаем массив с магами и их характеристиками
for (var i = 0; i < wizards.length; i++) {
  wizards[i] =
  {
    name: window.util.getRandomWizardProp(WIZARD_NAMES) + ' ' + window.util.getRandomWizardProp(WIZARD_LAST_NAMES),
    coatColor: window.util.getRandomWizardProp(WIZARD_COAT_COLORS),
    eyesColor: window.util.getRandomWizardProp(WIZARD_EYES_COLORS),
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
