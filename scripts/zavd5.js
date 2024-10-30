let orders = [
    {
        orderId: 1,
        customer: {name: "Таня", email: "Tayan@gmail.com"},
        items: ["Кавун", "Мармелад"],
        total: 188.15
    },
    {
        orderId: 2,
        customer: {name: "Юля", email: "Yul@gmail.com"},
        items: ["салат", "кілька в томаті"],
        total: 200.0
    }
];

console.log(orders);

function getTotalSpentByCustomer(){
    let name = prompt("Кого ви хочете найти:");
    let customer = orders.filter(order => order.customer.name === name);
    let totalspent = customer.reduce((total, order) => total + order.total, 0);
    alert(totalspent);
}

getTotalSpentByCustomer();