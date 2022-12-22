const section:string[] = ["a","b"]
const dep:string[] = ["z","y"]

dep.push(...section)

console.log(dep)