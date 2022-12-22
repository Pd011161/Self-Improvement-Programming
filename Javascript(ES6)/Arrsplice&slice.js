// splice

const Arr = [1,2,3,4,5,6,7,8,9]

console.log("Normal = ",Arr)

Arr.splice(2,4) // splice(ตำแหน่ง,จำนวน)

console.log("ลบตั้งแต่Arrตำแหน่งที่[2]จำนวน4ตัว = ",Arr)

Arr.splice(1,2,0) // splice(ตำแหน่ง,จำนวน,แทนที่ด้วยค่า)

console.log("ลบตั้งแต่Arrตำแหน่งที่[1]จำนวน2ตัวออกแล้วแทนที่ด้วย0 = ",Arr)


// slice

const data = [ 1, 0, 8, 9 ]
const nwArr = data.slice(1,3); // slice(ตำแหน่งเริ่ม,ตำแหน่งจบ-1)

console.log("sliceตั้งแต่Arrตำแหน่งที่[1]ถึงตำแหน่งที่3-1ออกมา  = ",nwArr)
