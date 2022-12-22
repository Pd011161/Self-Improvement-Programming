//block scope (let/const)
// var = grobal
// let = local
// const = local

let x= 2;


if(x==2){
    let y = 3;
    var z = 10;
    const w = 100;
    w = 200; // ERROR(const)
    console.log("xใน:",x);
    console.log("yใน:",y);
    console.log("zใน:",z);
    console.log("wใน:",w);
}
w = 200; // ERROR
console.log("wนอก:",w); // ERROR(Local)
console.log("xนอก:"+x);
// console.log("yนอก:",y);
console.log("zนอก:"+z);