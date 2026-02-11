// বয়স দিয়ে vote দিতে পারবে কিনা চেক করো
// const voter = (age) =>
//   typeof age !== "number" ? "Invalid" : age < 18 ? "not voter" : "voter";

// const result = voter();
// console.log(result);

// একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো

const bigOrSmall = (num) =>
  typeof num !== "number"
    ? "Invalid"
    : num === 100
      ? "100"
      : num < 100
        ? "small"
        : "big";
const result = bigOrSmall(101);
console.log(result);

// Student এর mark দিয়ে grade বের করো
const grade = (mark) =>
  typeof mark !== "number" || mark < 0 || mark > 100
    ? "Invalid"
    : mark >= 80
      ? "A+"
      : mark >= 70
        ? "A"
        : mark >= 60
          ? "B"
          : mark >= 50
            ? "C"
            : mark >= 40
              ? "D"
              : "F";

console.log(grade(85)); // A+
console.log(grade(72)); // A
console.log(grade(35)); // F
console.log(grade("90")); // Invalid

// Leap year চেক করার প্রোগ্রাম লেখো

// তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো

// Login system বানাও (email && password চেক)

// Ternary operator দিয়ে even/odd চেক করো
