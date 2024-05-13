// 25. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'choclate' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const Cart = ["Milk", "Coffee", "Tea", "Honey"];
// let allergic=true;
// 1).
Cart.unshift("chocolet");
console.log(Cart);
// 2).
Cart.push("Sugar");
// 3).
Cart.splice(4, 1);
console.log(Cart);
// 4).

Cart[3] = "Green Tea";
console.log(Cart);
