let product = {
    name : "TV" , 
    color : "white",
    price : "100",
    display:function(){ // method
        return "ชื่อ= "+ this.name+" สี= "+ this.color+" ราคา= "+this.price ;
    },
    discount : function(){
        return this.price - 10;
    }
};

console.log("METHOD");
console.log(product.display());
console.log("ราคาลด10= ",product.discount());

console.log("NORMAL");
console.log("ช่ือ= ",product.name," สี= ",product.color, " ราคา= ",product.price);

document.write("PRODUCT= ",product.display());

