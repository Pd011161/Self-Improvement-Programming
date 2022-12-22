const cnm=(n:number):string=>{
    if(n%2 ===0 ){
        return "Parameter&Return"
    }else{
        return "Return&Parameter"
    }
}
console.log(cnm(100))

console.log("&&&&&&&&&&&&&&&&&&&")

const tax=(x:number,y:number):number=>{
    return x+y
}
console.log(tax(200,100))