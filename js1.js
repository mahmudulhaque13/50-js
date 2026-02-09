//  A. Math & Basic Logic (1–8)

// একটি সংখ্যা even না odd চেক করো

// একটি সংখ্যা positive, negative না zero চেক করো

// তিনটি সংখ্যার গড় (average) বের করো

// Celsius থেকে Fahrenheit convert করো

// Rectangle এর area বের করো

// একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো

//====== 1.দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো ======

// function add(a, b) {
//   return a + b;
// }
// const result = add(2, 3);
// console.log(result);

// const add = (a, b) => {
//   return a + b;
// };
// const result = (4, 9);
// console.log(result);

// ======= 2.দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ বের করো =========
const doMath = (x, y) => {
  return `substruction=${x - y}, multiplication=${x * y}, divition=${x / y}`;
};
const result = doMath(6, 2);
console.log(result);
