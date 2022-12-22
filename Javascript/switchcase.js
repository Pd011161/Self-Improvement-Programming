let status = 1; //0=ปิด , 1=เปิด
switch (status){
    case 1 : light="open";
        break;
    case 0 : light="close";
        break;
    default : light="error";
}console.log(light);

