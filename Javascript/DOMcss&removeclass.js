const box = document.getElementById('box');
let status;
function addDM(){
    box.classList.add("darkM");
}

function delDM(){
    box.classList.remove("darkM");
}

function chDM(){
    box.classList.toggle("darkM");
    status = box.classList.contains("darkM");
    console.log("class darkM: ",status);
    if(status){
        box.style.color="yellow";
    }else{
        box.style.color="red";
    }
}

