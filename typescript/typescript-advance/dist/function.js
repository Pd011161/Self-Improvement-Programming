"use strict";
// 1)function ไม่มีการรับ และส่งค่า (void)
function say() {
    console.log("HELLOVoid");
}
say();
console.log("==================");
// 2)function ที่มีการรับค่า (parameter)
function sy(nm) {
    console.log(`Hello${nm}`);
}
sy("Parameter");
console.log("==================");
// 3)function ที่มีการส่งค่า (Return)
function a() {
    return "Return";
}
console.log(a());
console.log("==================");
// 4)function ที่มีการรัยบและส่งค่า (Parameter&Return)
function chnm(n) {
    if (n % 2 === 0) {
        return "Parameter&Return";
    }
    else {
        return "Return&Parameter";
    }
}
console.log(chnm(100));
console.log("&&&&&&&&&&&&&&&&&&&");
function tt(x, y) {
    return x + y;
}
console.log(tt(200, 100));
