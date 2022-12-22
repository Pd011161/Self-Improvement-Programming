
const Arr1 = [1,2,3]
const Arr2 = [4,5,6]
const newArr = [0,...Arr1,...Arr2] // รวมArrayด้วย ...
const pArr = [7,8,9,10]
console.log(Arr1)
console.log(Arr2)
console.log("เดิม",newArr)
newArr.push(...pArr) // จะเป็นก้อน ถ้าอยากให้กระจายใส่ ...
console.log("ใหม่",newArr)
