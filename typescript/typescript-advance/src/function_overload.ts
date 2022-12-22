function say():string
function say(name:string):string
function say(name?:unknown):unknown{
    if(!name){
        return `Hell TS`
    }
    if(typeof name == "string"){
        return `Hello ${name}`
    }
    throw new Error("False Data")
}

console.log(say())

console.log(say("Pd"))


console.log("===================")

function total(a:number,b:number):number{
    return a+b
}

console.log(total(100,200))

function tt(a:string,b:string):string{
    return(parseInt(a)+parseInt(b)).toString();
}

console.log(tt("100","200"))

console.log("======Overload======")

function t(a:number,b:number):number
function t(a:string,b:string):string
function t(a:unknown,b:unknown):unknown{
    if(typeof a=="number" && typeof b=="number"){
        return  a + b;
    }
    if(typeof a=="string" && typeof b=="string"){
        return "String:"+ a + b;
    }
    throw new Error("Type Data Error!!!!!")
}

console.log(t(100,20))
console.log(t("100","20"))
