
let menu = [
    {image:'cream.jpeg', title: 'Dr.Teals', price: 120},
    {image:'cetaphil.webp', title: 'Cetaphil', price: 40},
    {image:'Eucerin.jpeg', title: 'Eucerin', price: 60},
    {image:'glamslam.jpeg', title: 'Dr.Teals', price: 120},
    {image:'loreal.jpeg', title: 'Loreal', price: 80},
    {image:'olay.jpeg', title: 'Olay', price: 90},
];

let localCart = localStorage.getItem('catalog');
let cart = !localCart ? [] : JSON.parse(localCart);

loadMenu();
cartNumber();

function loadMenu() {
    let menuItems = '';
    menu.forEach((m, index) => {
        menuItems += `<div class="col-12 col-md-2" >
                        <div class="items mb-3">
                            <img src="/image/${m.image}" alt="" class="img-fluid">
                            <div class="product-desc">
                                <h3>${m.title}</h3>
                                <p>$${m.price}</p>
                                <button  onclick="addToCart(${index})">Add to cart</button>
                            </div>
                        </div>
                </div>`
    });
    document.getElementById('product-section').innerHTML = menuItems;
}

function addToCart(menuIndex) {
    let menuItem = menu[menuIndex];
    let cartSearch = cart.find((cartItem) => cartItem.title == menuItem.title);
    if (cartSearch == undefined) {
        cart.push({
            title: menuItem.title,
            price: menuItem.price,
            quantity: 1,
            total: menuItem.price
        });
        alert(`${menuItem.title} added to cart`);
        cartNumber();
    } else {
        cartSearch.quantity += 1;
        cartSearch.price = menuItem.price;
        cartSearch.total = cartSearch.quantity * menuItem.price;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function cartNumber() {
    document.getElementById('cart-count').innerHTML = cart.length;
}



















// let cart = [];
// let totalPrice = 0;

// function moveToCart(button) {
//     const name = button.getAttribute('data-name');
//     const price = parseInt(button.getAttribute('data-price'));

//     // Add the item to the cart array
//     cart.push({ name, price});
//     console.log(cart);
//     // Update total price
//     totalPrice += price;
//     displayCart();
// }
// function removeFromCart(index) {
//     // Update the total price by subtracting the price of the removed item
//     totalPrice -= cart[index].price;

//     // Remove the item from the cart array
//     cart.splice(index, 1);

//     // Update the cart display
//     displayCart();
// }

// function displayCart() {
//     const cartDisplay = document.getElementById('display-order');
//     cartDisplay.innerHTML = ''; // Clear the previous content

//     // Loop through the cart and display each item
//     cart.forEach((item, index) => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('cart-item');
//         itemElement.innerHTML = `
//             <p><strong>${item.name}</strong> - N${item.price}</p>
//             <button onclick="removeFromCart(${index})">Remove</button>
//         `;
//         cartDisplay.appendChild(itemElement);
//     });

//     // Add the total price at the end
//     const totalElement = document.createElement('div');
//     totalElement.classList.add('cart-total');
//     totalElement.innerHTML = `<p><strong>Total: N${totalPrice}</strong></p>`;
//     cartDisplay.appendChild(totalElement);
// }