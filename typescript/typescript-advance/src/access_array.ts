//1. Access array index
const user:string[]=["A","B","C"]
console.log("Before",user[0])
user[0] = "Z"
console.log(user[1])
console.log(user[2])
console.log("After",user[0])
console.log("Before count",user.length)
user.push("D")
console.log("pushD",user[3])
console.log("After count",user.length)

//2. Access Array for loop
console.log("for loop")
for(let i =0;i<user.length;i++){
    console.log(`Array[${i}] = ${user[i]}`)
}

//3. Access Array forEach
console.log('forEach')
user.forEach(element=>{    
    console.log(element)
})