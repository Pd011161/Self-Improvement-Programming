"use strict";
let user;
user = 'pd';
// console.log((user as string).toUpperCase())
console.log(user.toUpperCase());
// 1) Unknow + as type
let user2;
user2 = 'wtf';
console.log(user2.toUpperCase());
// console.log(user2.toUpperCase()) // error ถ้าเป็น unknown แล้วไม่ใช้ as เพราะไม่รู้type
// 2) Unknow + <type>
let user3;
user3 = 'ck';
console.log(user3.toUpperCase());
