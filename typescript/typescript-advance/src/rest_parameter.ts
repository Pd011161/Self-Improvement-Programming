console.log("==============Normal=================")
function total1(a:number,b:number):number{
    return a+b
}    

console.log(total1(200,300))
console.log("==============rest parameter=================")

const tl=(...num:number[])=>{
    return num.reduce((result,value)=>{
        return result + value
    },0)
}

console.log(tl(100,200,2,5,6,10000,90))