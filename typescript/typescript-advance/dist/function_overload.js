"use strict";
function say(name) {
    if (!name) {
        return `Hell TS`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("False Data");
}
console.log(say());
console.log(say("Pd"));
console.log("===================");
function total(a, b) {
    return a + b;
}
console.log(total(100, 200));
function tt(a, b) {
    return (parseInt(a) + parseInt(b)).toString();
}
console.log(tt("100", "200"));
console.log("======Overload======");
function t(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return "String:" + a + b;
    }
    throw new Error("Type Data Error!!!!!");
}
console.log(t(100, 20));
console.log(t("100", "20"));
