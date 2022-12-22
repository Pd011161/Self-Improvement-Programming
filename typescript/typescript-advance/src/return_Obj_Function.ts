const pst : {lat:number,long:number} = {lat:10,long:20}

const rdp=():{lat:number,long:number}=>{
    return{
        lat: Math.random(),
        long:Math.random()
    }
}

console.log(rdp())