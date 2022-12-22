const num = [1,2,3,4,5,6,7]

const result =  num.filter(element=>{
    return element>4
})

const res = num.filter(element=>element>3)

console.log(result)
console.log(res)

console.log("==============")

const dt = [
    {name:"com", salary:20000, job:"Dev"},
    {name:"don", salary:30000, job:"Dev"},
    {name:"tong", salary:40000, job:"Programmer"}
]

const d = dt.filter(e=>{
    return e.salary>20000
})
console.log('คนที่เงินเดือนมากกว่า 20000 = ',d)

console.log("==============")

const job = dt.filter(e=>e.salary>15000).filter(e=>e.job==="Dev")
console.log('คนที่เงินเดือนมากกว่า 15000 อาชีพDev = ',job)