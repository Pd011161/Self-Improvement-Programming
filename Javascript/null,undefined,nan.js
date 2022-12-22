// null = ไม่มีค่า
// undefined = ไม่ได้กำหนดค่า
// NaN = ไม่ใช่ตัวเลขไปคำนวณทางคณิต

let a;
console.log(a);

a  = null;
if(!a) console.log("a=null");
else console.log("a=notnull");

check = !a? "a=null":"a=notnull";
console.log(check);

a = 10-"a";
console.log(a); //NaN