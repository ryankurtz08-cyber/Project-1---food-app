import {cart, addToCart} from './cart.js'
import { product } from './menuItems.js';

let productHTML = '';

const categories = {
    entree: 'Entrees',
    side: 'Sides',
    drinks: 'Drinks',
    desert: 'Desserts',
    sauces: 'Sauces'

};

for (const [type, title] of Object.entries(categories)) {
    const typeProducts = product.filter(item => item.type === type);
    
    if (typeProducts.length > 0) {
        productHTML += `<h2 style="width: 100%; margin: 20px 0 10px 0;">${title}</h2>`;
        productHTML += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; width: 100%;">`;
        
        typeProducts.forEach((product) => {
            productHTML += `
            <a class = "js-add-to-cart" data-product-name = "${product.name}"><div class = "product-items">
                <img src="${product.image}" alt="${product.name}" style="width: 120px; height: 100%; object-fit: cover;">
                <div style="padding: 5px; background-color: #dc5237; flex: 1; display: flex; flex-direction: column;">
                    <p style="margin: 0; font-size: 15px; font-weight: bold;">${product.name}</p>
                    <p style="margin-top: 0; font-size: 12px;">${product.description}</p>
                    <strong style="font-size: 14px; margin-top: auto; align-self: flex-end;">$${product.price / 100}</strong>
                </div>
            </div>
            </a>
            `;
        });
        
        productHTML += `</div>`;
    }
}



document.getElementById('js-menu-grid').innerHTML = productHTML

const productButton = document.querySelectorAll(".js-add-to-cart")


function updateCartQuantity() {
    let cartQuantity = 0;
        cartItem.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        })
}


productButton.forEach((link) => {
    
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const productName = link.dataset.productName;

        addToCart(productName);
        updateCartQuantity();
        
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    })

})