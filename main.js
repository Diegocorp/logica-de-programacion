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

console.log(BracketMatcher("((coder)(byte)"));
