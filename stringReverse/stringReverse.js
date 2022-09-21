"use strict";
exports.__esModule = true;
function reverseString(str) {
    var result = "";
    var i = str.length - 1;
    while (i >= 0) {
        result += str[i];
        i--;
    }
    return result;
}
var answer = reverseString("olleh");
console.log(answer);
///meth0d 2
function reverseString1(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString1("ole"));
// method3
function reverse(str) {
    var res = "";
    for (var i = 0; i < str.length; i++) {
        res = str[i] + res;
    }
    return res;
}
console.log(reverse("ramu"));
