//โปรแกรมตัดเกรด
// and = และ
// or = หรือ

let score = 50;

console.log(score >= 70 && score<=80); //true&&true = true
console.log(score >= 70 || score<=80,); //true||false = true 

// PROGRAM
// 70-80 = A
// 50-60 = B
// <49 = F

score = 71;
console.log(score >= 70 && score<=80,"A");
score = 65;
console.log(score >= 50 && score<=69,"B");
score = 40;
console.log(score<49,"F");