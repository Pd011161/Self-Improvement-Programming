"use strict";
const Y = {
    // name: true, //ถ้าหากใส่true จะ type error
    name: "Pd",
    age: 10
};
const swdt = (data) => {
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`);
};
swdt(Y);
