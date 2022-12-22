const num = [1,2,3,4,5]

// MAP
const mapnum = num.map(e=>100)
console.log(mapnum)

console.log('==========')

// Filter
const filnum = num.filter(e=>e>3)
console.log(filnum)

console.log('==========')

//Reduce
const rednum = num.reduce((value,e)=>{
    console.log("total:",value)
    const total = e+value
    return total
    
},0) // value = 0
console.log("total = ",rednum)

console.log('==========')

const cart = [
    {item:"bag",price:1100},
    {item:"phone",price:15000},
    {item:"pan",price:890}
]

const sumcart = cart.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)
console.log("summationprice : ",sumcart)

// ลดรูป line 32 ถึง Line 36
const sum = cart.reduce((value,e)=>e.price+value,0)
console.log("summationprice : ",sum)