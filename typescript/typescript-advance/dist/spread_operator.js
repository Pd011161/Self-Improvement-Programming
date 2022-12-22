"use strict";
const section = ["a", "b"];
const dep = ["z", "y"];
dep.push(...section);
console.log(dep);
