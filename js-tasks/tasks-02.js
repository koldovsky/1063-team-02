https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function century(year) {
  return Math.ceil(year / 100);
}

https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return (toReturn === 'value') ? minValue :
         (toReturn === 'index') ? arr.indexOf(minValue) :
         null;
}


Поглиблені задачки (робити за бажанням):
https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const wolfIndex = queue.findIndex(function (animal) {
    return animal === "wolf";
  });
  const sheepInFrontOfWolf = queue.length - wolfIndex - 1;
  if (sheepInFrontOfWolf === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return (
      "Oi! Sheep number " +
      sheepInFrontOfWolf +
      "! You are about to be eaten by a wolf!"
    );
  }
}

https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x) {
  return x.map((item) => item * 2);
}

https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}
