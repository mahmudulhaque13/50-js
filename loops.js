// 1 থেকে 10 পর্যন্ত সংখ্যা print করো
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 1 থেকে 50 পর্যন্ত even সংখ্যা print করো
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 50; i += 2) {
//   console.log(i);
// }

// 10 থেকে 1 পর্যন্ত reverse loop চালাও
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// একটি সংখ্যার নামতা print করো
// let number = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(number + " x " + i + " = " + number * i);
// }

// 1–100 এর মধ্যে 3 দিয়ে divisible সংখ্যা বের করো
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 3; i <= 100; i += 3) {
//   console.log(i);
// }

// loop ব্যবহার করে sum বের করো
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log(sum);
// // while loop
// let i = 1;
// let sum = 0;

// while (i <= 19) {
//   sum += i;
//   i++;
// }

// console.log("Total Sum =", sum);

// break ব্যবহার করে loop থামাও
// let number = 7;

// for (let i = 1; i <= 10; i++) {
//   if (i === number) {
//     console.log("Found it!");
//     break;
//   }

//   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // এখানে loop বন্ধ হবে
  }

  console.log(i);
}
