const p = document.getElementsByTagName('p');
console.log(p);

const n = document.getElementById('nm');
console.log(n);

n.innerText="CK"

function chtx(){
   return n.innerText="55"
}

function html(){
    return n.innerHTML="<h1>H1</h1>"
 }

 let x = 100,
     y = 20;
 function xx(){
    return n.innerHTML="x = "+x+" & "+" y = "+y;
 }


let z = 100,
    a = 20;
function za(){
return n.innerHTML=`x = ${z} & y = ${a}`;
}

const b = document.querySelector('.pg');
console.log("querySelector",b);

const c = document.getElementsByClassName('pg');
console.log("getElementsByClassName",c);

const d = document.querySelectorAll('.pg');
console.log("querySelectorAll",d);

// const เอาไว้กำหนดการเข้าถึงตัวElement ผ่าน id,class,tag
// const เป็นตัวแปรที่ไม่สามารถเปลี่ยนนแปลงค่าได้
// let เอาไว้ใช้กับตัวแปรที่รับค่ามาประมวลผลต่อ