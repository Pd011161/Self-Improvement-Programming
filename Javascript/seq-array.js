let x = [1,4,2,11,8,-3];

console.log("ค่าเริ่มต้น");
console.log(x);

console.log("น้อยไปมาก");
x.sort(function(a,b){ // a=ค่าน้อย , b=ค่ามาก
    return a-b; // น้อยไปมาก
});
console.log(x);


console.log("มากไปน้อย");
x.sort(function(a,b){ // a=ค่าน้อย , b=ค่ามาก
    return b-a; // มากไปน้อย
});

console.log(x);