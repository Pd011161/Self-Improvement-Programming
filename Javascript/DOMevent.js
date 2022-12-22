function welcome(){
    alert('Welcome to myweb')
}

function delinp(){
    const inp = document.getElementById('inp1');
    inp.classList.add("noninp");
}

function addinp(){
    const inp = document.getElementById('inp1');
    inp.classList.remove("noninp");
    return inp.innerHTML= '<input value="พิมไรมาอะไม่เห็นเลย" >';
}

function shwkey(){
    const inp = document.getElementById('inp1');
    // return inp.innerHTML= '<input value="พิมไรมาอะไม่เห็นเลย">';
}


function ch(){
    const sel = document.getElementById('sel');
    return sel.innerHTML= "<option>ไม่มีเพศ</option><option>ไม่ต้องหาไม่มีให้เลือก</option>";
}

function bt(obj){
    obj.style.marginTop = "100px";
    const bt = document.getElementById('bt');
    return bt.innerText="FUCKU";
}

function bto(obj){
    obj.style.marginTop = "-100px";
    const bt = document.getElementById('bt');
    return bt.innerText="SUBMIT";
}