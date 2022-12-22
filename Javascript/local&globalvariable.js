// local = let
// global

let a = 100;

function display(){
    let b = 200;
    console.log("aใน :",a);
    console.log("bใน :",b);
}
display();
console.log("aนอก :",a);
// console.log("bนอก :",b); // error = undefined

let x = 0;

function xx(){
    let x = 1;
    console.log("xใน :",x);
    console.log("xใน :",x);
}
xx();
console.log("xนอก :",x);
console.log("xนอก :",x);