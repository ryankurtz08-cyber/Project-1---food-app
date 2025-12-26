import { product } from "./menuItems.js";
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
    cart.forEach((cartItem) => {
        const p = findProduct(cartItem.productName)
        document.getElementById("checkout-items")
            .innerHTML += `
            <div class="col-md-6 cart-item-checkout">
                <div class="cart-item" >
                    <img src="${p.image}" alt="Nashville Hot Chicken Sandwich" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; margin-right: 20px;">
                    <div class="item-details">
                        <h4 style="margin: 0 0 5px 0;">${p.name}</h4>
                        <p style="margin: 0; font-weight: bold;">$${p.price / 100}</p>
                        <p>Quantity: ${cart.quantity}</p>
                        <button id = "delete-button" class = "deleteButton">delete</button>
                    </div>
                </div>
            </div>
            `;
    })
}




if (window.location.href.endsWith('cart.html')) {
    cartCheckout();
}


document.querySelectorAll(".deleteButton").
    forEach((link) => {
        link.addEventListener('click', () => {
            const container = link.closest(".cart-item");
            container.remove();
        })
    })

function findProduct(productName) {
    return product.find(p => {
        return (p.name === productName)

    })
}


