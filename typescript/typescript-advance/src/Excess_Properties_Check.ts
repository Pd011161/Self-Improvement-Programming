
const sDT=(data:{nm:string,age:number})=>{ 
    console.log(`ชื่อ = ${data.nm} ,อายุ  = ${data.age}`)
}

// เขียนแบบ Normal
const person={
    nm : "Pd",
    age : 12,
    add : "Bankok" // จะไม่มี Error poperties เพราะว่า ไม่มีการ check poperties 
}
sDT(person);

// เขียนแบบ check poperties
sDT({
    nm : "Pd",
    age : 12,
    // add : "Bankok" //Error เพราะมันเช็ค popertiesด้วย
});