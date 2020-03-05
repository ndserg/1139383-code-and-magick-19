'use strict';

(function () {
  window.util = {
    randomNumber: function getRandomInt(min, max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    },
    getRandomWizardProp: function (sourceList) {
      var randomProp = sourceList[window.util.randomNumber(0, sourceList.length - 1)];
      return randomProp;
    }
  };
})();
