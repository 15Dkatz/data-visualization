// var countLetters = require('./count');


var updateData = function() {
  var text = document.getElementById("textarea").toString();
  console.log('text', text);
  return countLetters(text); // grabbed from count.js // horrible
}

var drawBarChart = function() {
  var count = updateData();

  var svg = d3.select("body").select("svg");

  var countMin = 0;
  var countMax = d3.max(count.values());
  console.log("bounds:", countMin, countMax);

  var margin = {
    top: 15,
    right: 35,
    bottom: 30,
    left: 10
  }

  var bounds = svg.node().getBoundingClientRect();
  var plotWidth = bounds.width - margin.right - margin.left;
  var plotHeight = bounds.height - margin.top - margin.bottom;

  console.log(plotWidth, plotHeight, 'plot');
  var countScale = d3.scaleLinear()
    .domain([countMin, countMax])
    .range([plotHeight, 0])
    .nice()

  var letters = "abcdefghijklmnopqrstuvwxyz".split("");

  var letterScale = d3.scaleBand()
    .domain(letters)
    .range([0, plotWidth])
    .paddingInner(0.1)
}
