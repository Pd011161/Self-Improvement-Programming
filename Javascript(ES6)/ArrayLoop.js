const arr = [1,2,3,4,5,6]

// for
for(let i=0; i<arr.length; i++){
    console.log(`seq${i} = ${arr[i]}`);
}

console.log("========================")


// forEach
let sum = 0
arr.forEach(e=>{
    if(e>4){
        console.log(">>>");
    }
    console.log(e);
    sum+=e
    console.log(`tatal = ${sum}`)

});

console.log("========================")

// for of

for (const elem of arr){
    if(elem>=5) break
    console.log(`${elem}`)
}
