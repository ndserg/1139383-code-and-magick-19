'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var TEXT_WIDTH = 50;
var congratulationText = ['Ура вы победили!', 'Список результатов:'];

var randomColor = function getRandomInt(min, max) {
  return 'hsl(240,' + (Math.floor(Math.random() * (max - min + 1)) + min) + '%, 50%)';
};

var getMaxTime = function (times) {
  var maxTime = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  return maxTime;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  var bestResult = getMaxTime(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  for (var n = 0; n < congratulationText.length; n++) {
    ctx.fillText(congratulationText[n], CLOUD_X + GAP * 3, CLOUD_Y + FONT_GAP * (n + 2));
  }

  for (var i = 0; i < names.length; i++) {
    var SCORES_BAR_HEIGHT = BAR_HEIGHT * times[i] / bestResult;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP * 5 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP, TEXT_WIDTH);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 5 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2.5 - SCORES_BAR_HEIGHT, TEXT_WIDTH);

    ctx.fillStyle = randomColor(0, 100);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP * 5 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2 - SCORES_BAR_HEIGHT, BAR_WIDTH, SCORES_BAR_HEIGHT);
  }
};
