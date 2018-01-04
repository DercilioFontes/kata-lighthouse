var repeatNumbers = function(data) {
  var stringAllResult = "";
  for (var i = 0; i < data.length; i++) {
    stringAllResult = stringAllResult.concat(getString(data[i]));
    if (i !== (data.length - 1)) {
      stringAllResult = stringAllResult.concat(", ");
    }
  }
  return stringAllResult;
};


function getString(array) { // Parameter type: array [number to repeat as a string, number of repetition]
  var stringToRepeat = array[0].toString();
  var nR = array[1]; // nR = number of repetition
  var stringResult = "";
  for (var i = 0; i < nR; i++) {
    stringResult = stringResult.concat(stringToRepeat);
  }
 return stringResult;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));