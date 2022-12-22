const pAll = document.querySelectorAll('p');

console.log("pAll: ",pAll);
console.log("pAll[1]: ",pAll[1].innerHTML);

let count = 1;

function crt(){
    const menu = document.getElementById('menu');
    const item = document.createElement('li');
    item.innerText = "menu"+(count++);
    menu.appendChild(item);
}

function deli(){
    const item = document.getElementById('item');
    const obj = document.getElementById('item3');
    item.removeChild(obj);
}

const newitem = document.createElement('li'); // <li></li>
newitem.innerText = "x"; // <li>x</li>
function chB(){
    const item = document.getElementById('item');
    const B = document.getElementById('item2');
    item.replaceChild(newitem,B)
}