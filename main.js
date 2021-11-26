//ANCHOR: BracketMatcher Bracket Matcher parentesis

function BracketMatcher(str) {
  let stack = [];

  for (let character of str.split("")) {
    if (character === "(") {
      stack.push("(");
    } else if (character === ")") {
      if (stack.length === 0) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(BracketMatcher(""));

//ANCHOR: Fibonacci with array

function checkIsFibonacci(arr) {
  let n = arr.length;

  if (n == 1 || n == 2) return true;

  // Sort array
  arr.sort((a, b) => a - b);

  // After sorting, check if every
  // element is equal to the sum
  // of previous 2 elements
  for (i = 2; i < n; i++) {
    if (arr[i - 1] + arr[i - 2] != arr[i]) return false;
  }
  return true;
}

console.log(checkIsFibonacci([8, 2, 4]));

//ANCHOR: Count number repeatead in array

function countNumberRepeatead(arr) {
  const cities = {};
  arr.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  return Object.keys(cities)
    .map((city) => ({
      name: city,
      times: cities[city],
    }))
    .sort((a, b) => b.times - a.times)
    .slice(0, 5)
    .map((city) => city.name);
}

console.log(
  countNumberRepeatead([
    "madrid",
    "elios",
    "elios",
    "mazer",
    "moriga",
    "laser",
    "laser",
    "ogina",
  ])
);
