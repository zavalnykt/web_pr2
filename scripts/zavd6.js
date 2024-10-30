let products = [
    {productId: 1, name: "сирок глазурований", price: 10.80},
    {productId: 2, name: "йогурт полуничний", price: 25.50}
];

let purchases = [
    {purchaseId: 1, productId: 1, quantity: 150},
    {purchaseId: 2, productId: 2, quantity: 200}
];

function getTotalSales(){
    let sum = [];

    purchases.forEach(purchase => {
        let product = products.find(p => p.productId === purchase.productId);
        if(product){
            sum.push({productName: product.name, price: product.price*purchase.quantity}); 
        }
    });
    console.log(sum);
}

getTotalSales();