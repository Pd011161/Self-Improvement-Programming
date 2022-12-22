"use strict";
const shEmp = (name, age, address = "กทม") => {
    console.log(`ชื่อ = ${name}, อายุ = ${age}, ที่อยู่ = ${address}`);
};
shEmp("Pd", 10);
shEmp("ck", 10, "รย");
