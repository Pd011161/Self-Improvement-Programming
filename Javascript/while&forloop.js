// while = เมื่อ 
// ใช้เมื่อ ไม่รู้รอบที่ชัดเจน
let count = 0;
while(count<5){
    console.log(count);
    if(count==3){
        break;
    }
    count++;
}

console.log("===============================")
// for เริ่มถึงเท่าไร 
// ใช้เมื่อ รู้รอบชัดเจน
for(let n = 0; n<5; n++){
    console.log(n);
}

console.log("===============================")
// do..while ทำ(do)..จนถึง(while)... 
//ใช้เมื่อ อยากให้ลองทำก่อน1รอบ แล้วทำซ้ำไปเรื่อยๆหากเงื่อนไขใน while เป็นจริง
count = 0;
do{
    console.log(count);
    count++;
}while(count<5);

console.log("===============================")
// while true 
count = 0;
while(true){
    console.log(count);
    if(count==3) break;
    count++;  
}


console.log("===============================")
// continue = ไม่ทำ...
for(let count = 1; count<=10; count++){
    
    if(count==3) continue; //ไม่ทำ count=3
    // if(count==7) break; 
    console.log(count);
}