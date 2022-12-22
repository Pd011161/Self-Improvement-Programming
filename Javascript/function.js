// 1.function ที่ไม่มีการรับค่า
console.log("function ที่ไม่มีการรับค่า");
// console.log("hello");
function HI(){
    console.log("hello");
}

HI(); // เรียกfunction

function noti(){
    alert("MESSAGE");
}

function disp(){
    document.write("Pd");
}

console.log("==============================")
// 2.function ที่มีการรับค่า
console.log("function ที่มีการรับค่า");

function num(n){
    console.log(n);
}
num(10);
num(5);

let text = "PDev";
num(text);


function fulln(fsn , ln, city){
    console.log("ชื่อจริง: ", fsn, "นาทสกุล: ", ln, "ที่อยู่: ", city);
}
fulln("ปรีดี","ไชยกิจ","ระยอง");
fulln("ปรีดี","ไชยกิจ");
fulln("ปรีดี");


function summation(x,y){
    total = x-y;
    console.log("ผลรวม: ",total);
}
summation(2,3)
summation(2,"a")


console.log("==============================")
// 3.function ที่มีการส่งค่า
function getIP(){
   return "127.0.0.1";
}
let IP = getIP();
console.log("เลขIP = ",IP);

function getNum(){
    return 10*10;
}

let MUL = getNum();
console.log("ผลคูณ = ",MUL);

function getAd(){
    let city = "rayong";
    return city;
}
console.log("ที่อยู่ =",getAd());

// 4.function ที่มีการรับค่าเข้ามาแล้วส่งค่าออกไป
function setSal(salary){
    let bonus = 1000;
    return salary+bonus;
}

let ATSL = setSal(10000);
console.log("เงินเดือนรวมของA = ",ATSL);
ATSL*=93/100
console.log("เงินเดือนรวมหลังหักภาษีของA = ",ATSL);

let BTSL = setSal(30000);
console.log("เงินเดือนรวมของB = ",BTSL);

function getNm(n,sn){
    return n +" "+ sn;
}
console.log(getNm("Predee","Chaiyakit"));

// 5.function ที่มีการใส่ค่าเริ่มต้นให้กับ parameter

function fullNm(fn,sm,ct="กทม."){
    console.log("ชื่อ:",fn+" "+sm, "ที่อยู่:", ct)
}

fullNm("ปรีดี","ไชยกิจ");