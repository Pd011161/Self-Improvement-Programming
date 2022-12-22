getDatacustomer=(customername,customeradd="Bangkok")=>{
    // if(!customeradd){ แบบเต็ม Default line1
    //     customeradd = 'Bangkok'
    // } 
    const address = `
    ชื่อลูกค้า: ${customername}
    ที่อยู่: ${customeradd}    
    `
    return address
}

console.log(getDatacustomer("Pd","Rayong"));
console.log(getDatacustomer("SK"));