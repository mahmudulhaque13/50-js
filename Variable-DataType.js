//=========== 9.let, const, var দিয়ে একই ভ্যারিয়েবল declare করে পার্থক্য দেখাও ======
// VAR
// var x = 10;
// var x = 20; // can declare again
// console.log("var x =", x); // 20

// // LET
// let y = 10;
// // let y = 20; can't declare again
// y = 20; // value can be changed
// console.log("let y =", y);

// // CONST
// const z = 10;
// // const z = 20;
// // z = 20;
// console.log("const z =", z);

// // BLOCK SCOPE TEST
// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// console.log("var a =", a);
// console.log("let b =", b);  Error
// console.log("const c =", c); Error

// ======== 10.একটি ভ্যারিয়েবলের type চেক করো (typeof) ========
// let a = 10;
// let b = "Hello";
// let c = true;
// let d = {};
// let e = [];
// let f = null;
// let g;

// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(typeof c); // boolean
// console.log(typeof d); // object
// console.log(typeof e); // object
// console.log(typeof f); // object
// console.log(typeof g); // undefined

// ============== 11.string কে number এ convert করো ===========
// let str = "123";
// let num = Number(str);

// console.log(num); // 123
// console.log(typeof num); // number

// ==========12.number কে string এ convert করো==========
// let num = 123;
// let str = String(num);

// console.log(str);        // "123"
// console.log(typeof str); // string

// let num = 456;
// let str = num.toString();

// console.log(str); // "456"

// let num = 789;
// let str = num + "";

// console.log(str); // "789"

// let num = 100;
// let str = `${num}`;

// console.log(str); // "100"

// কোনটা কখন?
// দরকার	ব্যবহার
// safest way	String()
// normal case	toString()
// quick hack	num + ""
// modern code	`${num}`

//============== 13.NaN কিভাবে তৈরি হয় তার উদাহরণ দেখাও============
// Number conversion fail হলে
// let a = Number("Hello");
// console.log(a);        // NaN
// console.log(typeof a); // number ⚠️

// লক্ষ্য করো, typeof NaN = "number"

// 2️⃣ Invalid arithmetic operation
// console.log("abc" / 2);   // NaN
// console.log("abc" * 3);   // NaN
// console.log(0 / 0);       // NaN

// 3️⃣ parseInt/parseFloat fail হলে
// console.log(parseInt("xyz"));     // NaN
// console.log(parseFloat("abc123")); // NaN

// 4️⃣ Math operation invalid হলে
// console.log(Math.sqrt(-1)); // NaN

// ✅ NaN চেক করার নিয়ম

// == বা === দিয়ে চেক করা যাবে না!

// let x = NaN;
// console.log(x === NaN); // false

// // সঠিক চেক
// console.log(isNaN(x));  // true
// console.log(Number.isNaN(x)); // true (recommended)
