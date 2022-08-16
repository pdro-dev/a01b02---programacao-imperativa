let _1 = !true; // false
let _2 = !false; // true
let _3 = "error" // !!false true; // error
let _4 = !!true; // true
let _5 = !1; // false
let _6 = !!2; // true
let _7 = !0; // true
let _8 = !!0; // false
let _9 = !!""; // false

let x = 5;
let y = 9;
let _10_a = x < 10 && x!==5; // true
let _10_b = x > 9 || x===5; // false
let _10_c = !(x===y) // true 


let ex1 = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10_a, _10_b, _10_c];
console.log("exercicio 1: ", ex1);

// ------------------------------------------------------------
// ------------------------------------------------------------

let x1 = 10;
let y1 = "a";
let result1 = (y1 === "b" || x1 >= 10); // true

// ------------------------------------------------------------

let x2 = 3;
let y2 = 8;

let a = x2 == "3";
let b = x2 === y2;
let ab = !(a || b);
let c = y2 !== 8;
let d = x2 <= y2;
let cd = !(c && d);
let abcd = ab && cd;

let ex2_i2 = [a, b, c, d, ab, cd, abcd];
console.log("exercicio 2, item 2, debug  ", ex2_i2);

let result2 = !(x2 == "3" || x2 === y2) && !(y2 !== 8 && x2 <= y2); // false


// ------------------------------------------------------------

let str = "";
let msg = "haha!";
let eBonito = "false";

let p1 = (str || msg);
let p2 = (p1 && eBonito);
let p3 = !p2;
let ps = [p1, p2, p3];
console.log("exercicio 2, item 3, debug  ", ps);

let result3 = !((str || msg) && eBonito); // false

let ex2 = [result1, result2, result3];
console.log("exercicio 2: ", ex2);