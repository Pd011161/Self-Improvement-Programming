"use strict";
let emp = {
    id: 1,
    name: "Pd",
    salary: 50000,
    phone: "0875863437"
};
console.log("Before", emp);
// emp.id = 100; // error can not assign!!
emp.name = "Ck"; // can assign
console.log("After", emp);
