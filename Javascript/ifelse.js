// IF
age = 19;

let result = (age >= 15);
if(result){
    console.log("age =", age)
    console.log("คำนำหน้าเป็นนาย และ นางสาว")
}
if(age >= 15){
    console.log("age =", age)
    console.log("คำนำหน้าเป็นนาย และ นางสาว")
}

console.log("================================")

let balance = 1000;
let out = 100;

if(balance>out){
    console.log("เงินในบัญชี = ",balance);
    console.log("ถอน = ",out);
    console.log("ยอดคงเหลือ = ",balance-out )
}

console.log("================================")

out = 1100;
// IF..ELSE
if(balance>out){
    console.log("เงินในบัญชี = ",balance);
    console.log("ถอน = ",out);
    console.log("ยอดคงเหลือ = ",balance-out )
}else{
    console.log("เงินในบัญชี = ",balance);
    console.log("ถอน = ",out);
    console.log("จำนวนเงินในบัญชีไม่พอ")
}

console.log("================================")
console.log("IF");
out = 1000;
//IF,IFELSE,ELSE *** เงื่อนไขใดเป็นจริงจะไม่ทำเงื่อนไขถัดไปต่อ ต่อให้เงื่อนไขถัดไปจะเป็นจริงด้วย ***
if(balance>out){
    console.log("เงินในบัญชี = ",balance);
    console.log("ถอน = ",out);
    console.log("ยอดคงเหลือ = ",balance-out )
}else if(balance==out){
    console.log("เงินในบัญชี = ",balance);
    console.log("ถอน = ",out);
    console.log("เงินหมดบัญชี");
}else{
    console.log("เงินในบัญชี = ",balance);
    console.log("ถอน = ",out);
    console.log("จำนวนเงินในบัญชีไม่พอ");
}


//ลดรูป if..else

console.log("================================")
console.log("IF..ELSE");
out = 300;
// out = 1300;
check = balance>out ? "ถอนได้" : "ถอนไม่ได้" ;
console.log("เงินในบัญชี = ",balance);
console.log("ถอน = ",out);
console.log(check);


// IFซ้อนIF
out = 900;      //success เพราะ balance>out
// out = 1000;  //error เพราะ balance=out
// out = 1900;  //error เพราะ balance<out
console.log("================================")
console.log("IFIF");

if(balance>out){
    console.log("SUCCES");
    if(balance>out){
        console.log("เงินในบัญชี = ",balance);
        console.log("ถอน = ",out);
        console.log("ยอดคงเหลือ = ",balance-out )
    }else if(balance==out){
        console.log("เงินในบัญชี = ",balance);
        console.log("ถอน = ",out);
        console.log("เงินหมดบัญชี");
    }else{
        console.log("เงินในบัญชี = ",balance);
        console.log("ถอน = ",out);
        console.log("จำนวนเงินในบัญชีไม่พอ");
    }
}else{
    console.log("ERROR");
}
