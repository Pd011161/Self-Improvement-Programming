console.log("Hello typescript")


function total(a: number,b: number){
    return a+b;
}

console.log(total(10,20))
// console.log(total("10",20)) // Error type string
// console.log(total(true,true)) // Error type boolean

