// indexOf(ข้อมูลที่ต้องการค้นหา) ถ้าค้นไม่เจอได้่ค้่าติดลบ
// find(ข้อมูลที่ต้องการค้นหา) ถ้าไม่เจอจะได้ undefined
// findIndex(ข้อมูลที่ต้องการค้นหา) ถ้าค้นไม่เจอได้่ค้่าติดลบ

const num = ['a',2,3,'b',5,6,7,8]
const search1 = num.indexOf('a')
const search2 = num.indexOf(2)
console.log("Arrposition[0] = ",search1);
console.log("Arrposition[1] = ",search2);


const search3 = num.find(element => element === 'b')
console.log("Arr[b] = ",search3);

const search4 = num.findIndex(element => element === 8)
console.log("Arrposition[7] = ",search4);

