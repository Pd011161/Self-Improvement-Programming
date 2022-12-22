const sel = document.getElementById('sel');
const btn = document.getElementById('btn');

sel.addEventListener('change',ch);
btn.addEventListener('click',bt);

function ch(){
    const sel = document.getElementById('sel');
    return sel.innerHTML= "<option>ไม่มีเพศ</option><option>ไม่ต้องหาไม่มีให้เลือก</option>";
}

function bt(){
    alert("WTF");
}