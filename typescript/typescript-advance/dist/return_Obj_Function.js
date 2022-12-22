"use strict";
const pst = { lat: 10, long: 20 };
const rdp = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
console.log(rdp());
