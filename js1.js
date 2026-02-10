//  A. Math & Basic Logic (1–8)

// একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো

//====== 1.দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো ======

// function add(a, b) {
//   return a + b;
// }
// const result = add(2, 3);
// console.log(result);

// ======= 2.দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ বের করো =========
// const doMath = (x, y) => {
//   return `substruction=${x - y}, multiplication=${x * y}, divition=${x / y}`;
// };
// const result = doMath(5, 10);
// console.log(result);

// ========== 3.একটি সংখ্যা even না odd চেক করো
// const evenOdd = (num) =>
//   typeof num !== "number" ? "Invalid" : num % 2 === 0 ? "Even" : "Odd";
// const num = evenOdd();
// console.log(num);

// ========= 4.একটি সংখ্যা positive, negative না zero চেক করো =======
// const Char = (num) =>
//   typeof num !== "number"
//     ? "Invalid"
//     : num === 0
//       ? "zero"
//       : num < 0
//         ? "negative"
//         : "positive";
// const num = Char(0);
// console.log(num);

// ======== 5.তিনটি সংখ্যার গড় (average) বের করো ========

// const average = (a, b, c) =>
//   typeof a !== "number" ||
//   typeof b !== "number" ||
//   typeof c !== "number"
//     ? "Invalid"
//     : (a + b + c) / 3;

// ============ 6.Celsius থেকে Fahrenheit convert করো ==========

// function celsiusToFahrenheit(celsius) {
//   if (typeof celsius !== "number") {
//     return "Invalid";
//   }
//   return (celsius * 9) / 5 + 32;
// }
// console.log(celsiusToFahrenheit(20));

// ======== 7.Rectangle এর area বের করো ============
function rectangleArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    return "Invalid input";
  }
  return length * width;
}

console.log(rectangleArea(8, 4));
