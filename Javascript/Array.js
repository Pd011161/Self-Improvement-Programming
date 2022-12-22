// Normal form
let num1 = 1 ,num2 = 2 ,num3 = 3 ,num4  = 4 ,num5 = 5;
console.log(num3);

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(a);

// Array form
// 1.สร้่างโดยใช้คำสั่ง Array
let number = Array(100,'A',true,5,'m');
console.log(number);
console.log('ตัวแรก =', number[0])
console.log(typeof(number[0]));
console.log('ตัวสุดท้าย = ',number[4])
console.log(typeof(number[4]));
console.log(number[2]);
console.log(typeof(number[2]));

// 2.สร้างโดยเครื่องหมาย[]
let color = ['red','blue','yellow','green']
console.log(color);
console.log('Before = ',color[0]);
color[0] = 'pink';
console.log('After = ',color[0]);
