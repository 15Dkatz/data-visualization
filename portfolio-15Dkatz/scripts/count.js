var countLetters = function(input) {
  var notLetter = /[^a-z]/
  var text = input.toLowerCase().replace(notLetter, "");

  var count = d3.map();
  for (var i=0; i<text.length; i++) {
    var letter = text[i];

    if (count.has(letter)) {
      count.set(letter, count.get(letter)+1);
    } else {
      count.set(letter, 1);
    }
  }
  return count;
}

// exports.default = countLetters;
