// বয়স দিয়ে vote দিতে পারবে কিনা চেক করো
function voter = (age) =>
    typeof age !== "number"
    ? "Invalid"
    : age < 18
      ? "not voter"
      : "voter"
const age = voter(16)
console.log(age)
        


    

// একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো

// Student এর mark দিয়ে grade বের করো

// Leap year চেক করার প্রোগ্রাম লেখো

// তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো

// Login system বানাও (email && password চেক)

// Ternary operator দিয়ে even/odd চেক করো
