//array

type EMP={
    name: string,
    salary: number,
    depart?: string
}

const employ:EMP[]=[]
employ.push({
    name:"Pd", 
    salary:10000, 
    depart:"Dev"
})

employ.push({
    name:"BT", 
    salary:100000, 
})

console.log(employ)
