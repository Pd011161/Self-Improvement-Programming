        //แปลงข้อมูล
// แปลงจาก string เป็น Number
// 1. x = parseInt('1.2');
// 2. x = parseFloat('1.2');
// 3. ใช้เครื่องหมาย +เพิ่มไปข้่างหน้า string

let a = "10";
console.log(a);
console.log(typeof(a));
a = parseInt('10');
console.log(a);
console.log(typeof(a));

let b = +"20"
console.log(b);
console.log(typeof(b));


// แปลงจาก number เป็น string
// 1. ใช้เครื่องหมาย "" +ตัวแปร หรือ ต่าที่เป็นตัวเลข
// 2. ใช้ toString() เช่น x.toString()

let c = 20;
console.log(c);
console.log(typeof(c));
c = ""+c;
console.log(c);
console.log(typeof(c));

let d = 100;
console.log(d);
console.log(typeof(d));
d = d.toString()
console.log(d);
console.log(typeof(d));