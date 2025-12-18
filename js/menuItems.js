import {cart} from './cart.js'

const product = [{
    name: 'Nashville Hot Chicken Sandwich',
    type: 'entree',
    image: './images/chicken-sandwich.png',
    description: 'Our famous Nashville hot chicken sandwich with ranch slaw + 2 sides',
    price: '999'
}, {
    name: 'Chicken Strip Basket',
    type: 'entree',
    image: './images/chicken-strip-basket.png',
    description: '4 chicken strips + 2 sides',
    price: '799'
}, {
    name: 'Chicken Strip Salad',
    type: 'entree',
    image: './images/chicken-strip-salad.png',
    description: 'Cobb salad with 2 chicken strips',
    price: '1099'
}, {
    name: 'Regular Chicken Sandwich',
    type: 'entree',
    image: './images/regular-chicken-sandwich.png',
    description: 'regular chicken sandwich with ranch slaw.',
    price: '899'
}, {
    name: 'Chicken Nuggets',
    type: 'entree',
    image: './images/chicken-nuggets.png',
    description: '10-piece chicken nuggets with 2 sides',
    price: '799'
}, {
    name: 'Fries',
    type: 'side',
    image: './images/fries.png',
    description: 'Basket of fries with our special seasoning',
    price: '299'
}, {
    name: 'Coleslaw',
    type: 'side',
    image: './images/coleslaw.png',
    description: 'Ranch slaw',
    price: '299'
}, {
    name: 'Mashed Potatoes',
    type: 'side',
    image: './images/mashed-potatoes.png',
    description: 'Mashed potatoes and gravy',
    price: '299'
}, {
    name: 'Ice Cream Sundae',
    type: 'desert',
    image: './images/icecream-sundae.png',
    description: 'Vanilla icecream with chocolate syrup, rainbow sprinkles, and a cherry on top',
    price: '399'
}, {
    name: 'Cherry Pie with Ice Cream',
    type: 'desert',
    image: './images/cherry-pie.png',
    description: 'Mashed potatoes and gravy',
    price: '499'
}, {
    name: 'Cheesecake',
    type: 'desert',
    image: './images/chicken-sandwich.png',
    description: 'Cheesecake with strawberry sauce',
    price: '499'
}, {
    name: 'Coke',
    type: 'drinks',
    image: './images/coke.png',
    description: '',
    price: '299'
}, {
    name: 'sprite',
    type: 'drinks',
    image: './images/sprite.png',
    description: '',
    price: '299'
}, {
    name: 'Coffee',
    type: 'drinks',
    image: './images/coffee.png',
    description: '',
    price: '299'
},
];

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
    
productButton.forEach((link) => {
    
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const productName = link.dataset.productName;

        let matchingItem;

        cart.forEach((item) => {
            if (productName === item.productName) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity ++;
        } else {
            cart.push({
                productName: productName,
                quantity: 1
        })
        }
        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })
        
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    })

})


