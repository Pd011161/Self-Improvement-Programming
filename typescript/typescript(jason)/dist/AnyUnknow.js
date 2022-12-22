"use strict";
//any 
let x = (number) => {
    return number;
};
let number = "123";
console.log(x(number));
let num = 50; // unknow type error จะไม่แสดงผล แต่จะไม่แสดงผลอะไรเลยถ้าหาก typeผิด
num = 50.123;
if (typeof num === "number") {
    console.log(num);
}
// let q=(nn = 100)=>nn="2" // ไม่มีการ errorของtype เนื่องจากเราไม่ได้ระบุบังคับ typeของ nn
// console.log(q())         // แต่จะมีการerrorของการไม่ยอมระบุtypในภาษาtypescripก่อนcompileแทน 
// แต่ในในการcompileจะแสดงผลออกมาโดยไม่มีerrorแจ้ง
