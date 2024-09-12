//CREATE A PROTOTYPE OF A OBJECT AND ADD METHOD TO IT WHICH CALCULATE THE TOTAL VALUE
function Product(name,price,quantity){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
}

Product.prototype.totalValue=function(){
return this.price*this.quantity
}

const product1= new Product("widget",10,5);
const total1=product1.totalValue();

const product2= new Product("GODREJ",10,5);
const total2=product2.totalValue();


console.log(`total vlaue ${total1} and ${total2}`);
