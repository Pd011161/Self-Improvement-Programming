
let service:number=2
let result:string

switch(service){
    case 1:result="สอบถามเพิ่มเติม"
    break;
    case 2:result="ฝากเงิน"
    break;
    case 3:result="ถอนเงิน"
    break;
    default:result="Error"
}
console.log(`ท่านต้องการที่จะ${result}`)