type Httpreq = [code:number,status:string]

const goodst: Httpreq = [200,"OK"]
const Notfnd: Httpreq = [404,"not found page"]
const badReq: Httpreq = [400,"false request"]
const servErr: Httpreq = [200,"Internal Server Error"]

console.log(goodst)
console.log(Notfnd)
console.log(badReq)
console.log(servErr)