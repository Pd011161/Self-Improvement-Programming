//Array
const Arr = [1,2,3]
const a = Arr[0]
const b = Arr[1]
const c = Arr[2]
console.log("ก่อน")
console.log(a)
console.log(b)
console.log(c)

console.log("========")

const [d,e,f] = Arr
console.log("หลัง")
console.log(d)
console.log(e)
console.log(f)

console.log("================")

// Object
const product = {
    pdname : "ipad",
    price : "10000บาท",
    volumn : "100ชิ้น"
}
console.log("Before")
const pnm = product.pdname
const pc = product.price
const vl = product.volumn

console.log(pnm)
console.log(pc)
console.log(vl)

console.log("========")
console.log("After")
const {pdname,price,volumn:vol} = product // ค่า:ตัวแปรเก็บ

console.log(pdname)
console.log(price)
console.log(vol)