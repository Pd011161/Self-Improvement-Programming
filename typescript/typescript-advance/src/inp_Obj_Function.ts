const Y:{name:string,age:number}={
    // name: true, //ถ้าหากใส่true จะ type error
    name: "Pd", 
    age: 10
}

const swdt=(data:{name:string,age:number})=>{
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)
}

swdt(Y)