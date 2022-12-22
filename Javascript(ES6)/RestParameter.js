
summation1=(x,y)=>{
    let z = x+y;
    return z
}

summation2=(x,y,w)=>{
    let z = x+y+w;
    return z
}

summation3=(...numArr)=>{
    let total=0
    for(let num of numArr) total+=num
    return total
}

console.log(summation1(1,2))
console.log(summation2(1,2,3))
console.log(summation3(1,2,3,4)) // let num Line 14

