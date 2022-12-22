let w = ["A","B","C","D"];

console.log("Normal");
console.log(w[0]);
console.log(w[1]);
console.log(w[2]);
console.log(w[3]);

console.log("Forloop");
for(let i=0;i<w.length;i++){
    console.log("seq:", i+1, w[i]);
}