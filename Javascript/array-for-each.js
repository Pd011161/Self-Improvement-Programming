let w = ["A","B","C","D"];


console.log("Forloop");
for(let i=0;i<w.length;i++){
    console.log("seq:", i+1, w[i]);
}

console.log("================================")

console.log("ForEach");

w.forEach(data); // เอา w มา ForEach แล้วเก็บใน  function data
function data(item){ // funtion data เก็บ item ซึ่ง item = w แต่ละตัว
    console.log(item) // แสดงผล item = w แต่ละตัว
}

