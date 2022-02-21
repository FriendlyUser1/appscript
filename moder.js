// @OnlyCurrentDoc

/**
 * A custom function that gives you the mode of values in a range of cells
 * 
 * @param {range} valrange Range containing all values to be input
 * @return {String} Returns the mode value or values as a string
 * @customfunction
 */
function MODERANGE(valrange) {
  var vals = valrange.flat().filter(r=>r!="");
  var processed = [];
  var inNums = [];
  var codeKeys = {};
  for (var i = 0; i<vals.length; i++) {
    var curName = vals[i].toString();
    if (processed.includes(curName)) {
      var usingNum = codeKeys[curName];
    } else {
      var usingNum = i;
      codeKeys[curName] = usingNum;
    };
    inNums.push(usingNum);
    processed.push(curName);
  };

  var modes = getModes_(inNums);
  var modeVals = [];
  modes.forEach(function(mode) {
    modeVals.push(Object.keys(codeKeys).find(key => codeKeys[key] === parseInt(mode)));
  });
  if (Object.keys(codeKeys).length == vals.length) {
    return "No mode."
  }
  return modeVals.join(", ");
};

function getModes_(array) {
  var frequency = [];
  var maxFreq = 0;
  var modes = [];
  for (var i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1;

    if (frequency[array[i]] > maxFreq) {
      maxFreq = frequency[array[i]];
    };
  };
  for (var k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    };
  };
  return modes;
};
