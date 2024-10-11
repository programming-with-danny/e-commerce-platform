let localCart = localStorage.getItem('cart');
let cart = !localCart ? [] : JSON.parse(localCart);

function sumCartTotal() {
    // let totalCost = cart.reduce((accum, value) => accum + value.total, 0);
    let totalCost = 0;
    cart.forEach(cartItem => {
        totalCost += cartItem.total
    });
    document.getElementById('total-amount').innerHTML = `Total: $${totalCost}`;
}

function listCartItems() {
    let cartLi = '';
    if (cart.length == 0) {
        cartLi = `<li>No items in the cart yet.</li>`;
    } else {
        cart.forEach(cartItem => {
            cartLi += `<li>Item: ${cartItem.title} | Price: $${cartItem.price} | Qty: ${cartItem.quantity} | Total: $${cartItem.total}</li>`
        })
    }

    document.getElementById('cart-list').innerHTML = cartLi;
}

listCartItems();
sumCartTotal();





// let localCart = localStorage.getItem('cart');
// let cart = !localCart ? [] : JSON.parse(localCart);

// function sumCartTotal() {
//     // let totalCost = cart.reduce((accum, value) => accum + value.total, 0);
//     let totalCost = 0;
//     catalog.forEach(catItem => {
//         totalCost += catItem.total
//     });
//     document.getElementById('total-amount').innerHTML = `Total: $${totalCost}`;
// }

// function listCartItems() {
//     let cartLi = '';
//     if (cart.length == 0) {
//         cartLi = `<li>No items in the cart yet.</li>`;
//     } else {
//         cart.forEach(cartItem => {
//             cartLi += `<li>Item: ${cartItem.title} | Price: $${cartItem.price} | Qty: ${cartItem.quantity} | Total: $${cartItem.total}</li>`
//         })
//     }

//     document.getElementById('cart-list').innerHTML = cartLi;
// }

// listCartItems();
// sumCartTotal();






// // function removeFromCart(index) {
// //     // Update the total price by subtracting the price of the removed item
// //     totalPrice -= cart[index].price;

// //     // Remove the item from the cart array
// //     cart.splice(index, 1);

// //     // Update the cart display
// //     displayCart();
// // }

// // function displayCart() {
// //     const cartDisplay = document.getElementById('display-order');
// //     cartDisplay.innerHTML = ''; // Clear the previous content

// //     // Loop through the cart and display each item
// //     cart.forEach((item, index) => {
// //         const itemElement = document.createElement('div');
// //         itemElement.classList.add('cart-item');
// //         itemElement.innerHTML = `
// //             <p><strong>${item.name}</strong> - N${item.price}</p>
// //             <button onclick="removeFromCart(${index})">Remove</button>
// //         `;
// //         cartDisplay.appendChild(itemElement);
// //     });

// //     // Add the total price at the end
// //     const totalElement = document.createElement('div');
// //     totalElement.classList.add('cart-total');
// //     totalElement.innerHTML = `<p><strong>Total: N${totalPrice}</strong></p>`;
// //     cartDisplay.appendChild(totalElement);
// // }

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items to place an order.');
        return;
    }
}
// //     // Create an order summary
// //     let orderSummary = 'Your Order Summary:\n';
// //     cart.forEach(item => {
// //         orderSummary += `${item.name} - N${item.price}\n`;
// //     });
// //     orderSummary += `\nTotal: N${totalPrice}`;

// //     // Show the success alert with the order summary
// //     alert(`Order placed successfully!\n\n${orderSummary}`);

// //     // Reset cart and total price after placing the order
// //     cart = [];
// //     totalPrice = 0;

// //     // Refresh the cart display
// //     displayCart();
// // }

// Add event listener for the "Place Order" button
document.querySelector('button#place-order-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items to place an order.');
    }else{
        alert('Order placed successfully')
    }
});
