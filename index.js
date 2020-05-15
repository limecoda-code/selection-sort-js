function selectionSort(items = []) {
  var n = items.length;

  for (var i = 0; i < n; i++) {
    var minIndex = i;
    var minValue = items[i];

    for (var j = (i + 1); j < n; j++) {
      if (items[j] < minValue) {
        minIndex = j;
        minValue = items[j];
      }
    }

    var tempValueStore = items[i];
    items[i] = items[minIndex];
    items[minIndex] = tempValueStore;
  }

  return items;
}

// Sort list of integers
console.log(selectionSort([8,9,2,3,7,4]));

// Sort list of strings
console.log(selectionSort(['pickle','olives','sauerkraut','kimchi','caper','gherkin']));
