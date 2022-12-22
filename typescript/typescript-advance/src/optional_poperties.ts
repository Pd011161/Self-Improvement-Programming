// Poperties ?: type

type Ex={
    id: number,
    name: string,
    phone?: string // ใส่ไม่ใส่ก็ได้ เพราะ ? ทำให้ no check
}

let ex1:Ex={
    id:0,
    name:"CK"
}

console.log(ex1,"phoneไม่ระบุก็ได้")

let ex2:Ex={
    id:1,
    name:"Pd",
    phone: "0875863437"
}

console.log(ex2)