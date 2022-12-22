
let user:string;
user='pd';
// console.log((user as string).toUpperCase())
console.log(user.toUpperCase())


// 1) Unknow + as type
let user2:unknown;
user2='wtf';
console.log((user2 as string).toUpperCase())

// console.log(user2.toUpperCase()) // error ถ้าเป็น unknown แล้วไม่ใช้ as เพราะไม่รู้type

// 2) Unknow + <type>
let user3:unknown;
user3='ck';
console.log((<string>user3).toUpperCase())
