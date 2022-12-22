// Array Map

const Arr = [1,2,3,4,5]
console.log(Arr)

const res = Arr.map(elem=>{
    const a = elem*2
    return a
})

const x = Arr.map(e=>e*2)
console.log("Arr*2",x)
console.log("Arr*2",res)

const weather = ["แดดออก","ฝนตก","สดใส"]

const w = weather.map((e,i)=>{
    return `วันที่ ${i+1}+" "+สภาพอากาศ ${e}`;
})
console.log(w)



const data = [
    {day:"1/6/2000",weather:"แจ่มใส",temp:25},
    {day:"2/6/2000",weather:"ฝนตก",temp:22},
    {day:"3/6/2000",weather:"แดดออก",temp:27}
]

const dwt = data.map(e=>e.weather)
console.log(dwt);