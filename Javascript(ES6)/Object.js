const username = "Pd";
const age =23;
const phone = "0875863437"


const customer = {
    custoname :  username,
    age,
    phone,
    showDt(){
        console.log("customer:"+username+"age:"+age+"phone:"+phone);
    }
}
console.log(customer);
customer.showDt();

