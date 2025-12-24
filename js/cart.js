
export let cart = JSON.parse(localStorage.getItem('cart'));

if (cart === null) {
    cart = []
}
console.log(cart)
export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}


export function addToCart(productName) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productName === cartItem.productName) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
            productName: productName,
            quantity: 1
        })
    }
    saveToStorage()
}

function cartCheckout() {
    cart.forEach(() => {
        document.getElementById("checkout-items")
            .innerHTML += `
            <div class="col-md-6 cart-item-checkout">
                <div class="cart-item" >
                    <img src="./images/chicken-sandwich.png" alt="Nashville Hot Chicken Sandwich" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; margin-right: 20px;">
                    <div class="item-details">
                        <h4 style="margin: 0 0 5px 0;">Nashville Hot Chicken Sandwich</h4>
                        <p style="margin: 0; font-weight: bold;">$9.99</p>
                        <p>Quantity: 1</p>
                        <p>delete</p>
                    </div>
                </div>
            </div>
            `;
    })
}


if (window.location.href.endsWith('cart.html')) {
    cartCheckout();
}