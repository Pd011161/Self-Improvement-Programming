// เป็นการ custom type 
type Emp= {
    id:number,
    name:string,
    salary:number,
    phone:string
}

let emp1:Emp={
    id:1,
    name: "Pd",
    salary: 50000,
    phone: "0875863437"
} 
console.log("Before",emp1)

//===============================//

emp1.id = 0
emp1.salary = 100000
console.log("After",emp1)

const xxx=()=>{

}