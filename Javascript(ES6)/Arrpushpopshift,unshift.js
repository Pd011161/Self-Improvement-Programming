// push

const Arr = [1,2]
console.log("normal:",Arr)

Arr.push(3,4,5)
console.log("push345:",Arr)

Arr.push([6,7])
console.log("push[]:",Arr)

Arr.push(...[9,10])
console.log("push..[]:",Arr)

//pop

Arr.pop()
console.log("pop10:",Arr)

// shift

Arr.shift()
console.log("shift1:",Arr)

// unshift
Arr.unshift(0)
console.log("unshift0:",Arr)