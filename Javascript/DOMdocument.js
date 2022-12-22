const n = document.getElementById('nm');
// const js = document.getElementsByClassName('pg');
const js = document.querySelector('.pg');
function chtx(){
    n.style.color="red";
    n.style.fontSize="100px";
}

function css(){
    js.setAttribute(`class`,`css`); //ทำได้แค่อันเดียว
}