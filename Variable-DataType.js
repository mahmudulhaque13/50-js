//=========== 9.let, const, var দিয়ে একই ভ্যারিয়েবল declare করে পার্থক্য দেখাও ======
// VAR
var x = 10;
var x = 20; // can declare again
console.log("var x =", x); // 20

// LET
let y = 10;
// let y = 20; can't declare again
y = 20; // value can be changed
console.log("let y =", y);

// CONST
const z = 10;
// const z = 20;
// z = 20;
console.log("const z =", z);

// BLOCK SCOPE TEST
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log("var a =", a);
// console.log("let b =", b);  Error
// console.log("const c =", c); Error

// একটি ভ্যারিয়েবলের type চেক করো (typeof)

// string কে number এ convert করো

// number কে string এ convert করো

// NaN কিভাবে তৈরি হয় তার উদাহরণ দেখাও
