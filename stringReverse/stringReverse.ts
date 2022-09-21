export {};

function reverseString(str: string) {
  let result = "";
  let i = str.length - 1;

  while (i >= 0) {
    result += str[i];
    i--;
  }
  return result;
}

const answer = reverseString("olleh");

console.log(answer);

///meth0d 2

function reverseString1(str: string) {
  return str.split("").reverse().join("");
}

console.log(reverseString1("ole"));

// method3

function reverse(str: string) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res = str[i] + res;
  }
  return res;
}

console.log(reverse("ramu"));
