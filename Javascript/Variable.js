        // กฎการตั้งชื่อตัวแปร Javascript
// 1.ขึ้นต้นด้วยตัวอักกษรในภาษาอังกฤษตามด้วยตัวอักษรหรือตัวเลข
// 2.ห้ามขึ้นต้นด้วยตัวเลขหรือสัญลักษณ์พิเศษ
// 3.ขึ้นตันด้วสย $ และ _ ได้
// 4.มีลักษณะเป็น case sensitive คือ ตัวพิมพ์เล็กพิมใหญ่จะมีความหมายแตกต่างกัน
// 5.ไม่ซ้ำกับคำสงวน(Keyword) เช่น if , else , for ง
// สามารภใช้กฎข้อ3.เพื่อหลีกเลี่ยงได้ เช่น _if หรือ $for

// Javascript เป็นรูปแบบ Dynamic Typing
// var let เป็นการกำหนดตัวแปร
// const คือค่าคงที่ไม่สามารถเปลี่ยนทีหลังได้

let name;
console.log(name);
let age = 21;
console.log("อายุ = ",age,"ปี")

name = "Pd ";
console.log(name);

document.write(name);
document.write("อายุ = ",age,"ปี");

let Name = "WTF" , AGE = 1000000;
console.log("ก่อน = " , Name,AGE);
Name = "KUAY" , AGE = 000000;
console.log("หลัง = " , Name,AGE);

const VAT = 0.07;
console.log("ก่อน = " , VAT);
VAT = 0.17;
console.log("หลัง = " , VAT); // จะต้องErrorเพราะเป็นค่าคงที่เปลี่ยนค่าไม่ได้