// বয়স দিয়ে vote দিতে পারবে কিনা চেক করো
// const voter = (age) =>
//   typeof age !== "number" ? "Invalid" : age < 18 ? "not voter" : "voter";

// const result = voter();
// console.log(result);

// একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো

// const bigOrSmall = (num) =>
//   typeof num !== "number"
//     ? "Invalid"
//     : num === 100
//       ? "100"
//       : num < 100
//         ? "small"
//         : "big";
// const result = bigOrSmall(101);
// console.log(result);

// Student এর mark দিয়ে grade বের করো
// const grade = (mark) =>
//   typeof mark !== "number" || mark < 0 || mark > 100
//     ? "Invalid"
//     : mark >= 80
//       ? "A+"
//       : mark >= 70
//         ? "A"
//         : mark >= 60
//           ? "B"
//           : mark >= 50
//             ? "C"
//             : mark >= 40
//               ? "D"
//               : "F";

// console.log(grade(85)); // A+
// console.log(grade(72)); // A
// console.log(grade(35)); // F
// console.log(grade("90")); // Invalid

// Leap year চেক করার প্রোগ্রাম লেখো
// const isLeap = (year) =>
//   typeof year !== "number"
//     ? "Invalid"
//     : (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//       ? "Leap Year"
//       : "Not Leap Year";

// console.log(isLeap(2024));

// তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো
// const largest = (a, b, c) =>
//   typeof a !== "number" || typeof b !== "number" || typeof c !== "number"
//     ? "Invalid"
//     : a >= b && a >= c
//       ? a
//       : b >= a && b >= c
//         ? b
//         : c;

// console.log(largest(5, 12, 6));

// function findMax(a, b, c) {
//   if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
//     return "Invalid";
//   }
//   return Math.max(a, b, c);
// }

// console.log(findMax(7, 3, 11)); // 11

// Login system বানাও (email && password চেক)
// function login(email, password) {
//   if (!email || !password) {
//     return "Email and Password required ⚠️";
//   }

//   if (!email.includes("@")) {
//     return "Invalid Email format ❌";
//   }

//   const savedEmail = "admin@gmail.com";
//   const savedPassword = "123456";

//   if (email === savedEmail && password === savedPassword) {
//     return "Login Successful ✅";
//   }

//   return "Wrong credentials ❌";
// }

// console.log(login("admin@gmail.com", "123456"));

// Ternary operator দিয়ে even/odd চেক করো
function checkEvenOdd(num) {
  return typeof num !== "number"
    ? "Invalid Input"
    : num % 2 === 0
      ? "Even"
      : "Odd";
}

console.log(checkEvenOdd(38));
