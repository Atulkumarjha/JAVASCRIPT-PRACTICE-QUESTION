//CREATE AN ARRAY OF OBJECTS WHICH CALCULATES THE PRICE AND RETURN THE TOTAL VALUE OF THAT PRICE
function totalPrice(products){
    let total=0;

    for(const item of products){
        console.log(item);
        
        const itemPrice = item.quantity*item.price;
        console.log(itemPrice);
    }
}


console.log(totalPrice([
    {product: 'Milk',quantity:5, price: 1.50},
    {product: 'Eggs',quantity:6, price: 0.50},
    {product: 'Bread',quantity:7, price: 2.00},
    {product: 'Cheese',quantity:8, price: 5.50}
]))