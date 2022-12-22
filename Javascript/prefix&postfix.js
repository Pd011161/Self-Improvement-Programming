// ++(Prefix)  เพิ่มค่าให้ก่อน แล้วนำไปใช้
// (Postfix)++ นำไปใช้ก่อน แล้วค่อยเพิ่ม
// --(Prefix)  ลดค่าให้ก่อน แล้วนำไปใช้
// (Postfix)-- นำไปใช้ก่อน แล้วค่อยลด

let a=5, b=10;

console.log("PREFIX เพิ่มก่อนใช้");
console.log("ค่าเริ่มต้นa =",a);
console.log("ค่าa+prefix(++a) =",++a);
console.log("ค่าปัจจุบันa =",a);

console.log("=================")
console.log("POSTFIX ใช้ก่อนเพิ่ม");
a=5;
console.log("ค่าเริ่มต้นa =",a);
console.log("ค่าa+postfix(a++) =",a++);
console.log("ค่าปัจจุบันa =",a);

console.log("=================")

console.log("PREFIX ลดก่อนใช้");
console.log("ค่าเริ่มต้นb =",b);
console.log("ค่าa+prefix(--b) =",--b);
console.log("ค่าปัจจุบันb =",b);

console.log("=================")
console.log("POSTFIX ใช้ก่อนลด");
b=10;
console.log("ค่าเริ่มต้นb =",b);
console.log("ค่าa+postfix(b--) =",b--);
console.log("ค่าปัจจุบันb =",b);
