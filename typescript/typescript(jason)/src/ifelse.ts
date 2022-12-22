let amount:number=5
let result:string
let resul:string

console.log('NORMAL')
if(amount%2==0){
    result = 'เลขคู่'
}else{
    result = 'เลขคี่'
}
console.log(`Answer : ${result}`)

console.log('===========')

console.log('SHORTHAND')
// terrnary 
resul = (amount%2==0)? 'เลขคู่' : 'เลขคี่'
console.log(`Answer : ${resul}`)