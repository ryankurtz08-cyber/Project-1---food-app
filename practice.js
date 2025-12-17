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
    type: 'entree',
    image: './images/coleslaw.png',
    description: 'Ranch slaw',
    price: '299'
}, {
    name: 'Mashed Potatoes',
    type: 'side',
    image: './images/chicken-sandwich.png',
    description: 'Mashed potatoes and gravy',
    price: '299'
}, {
    name: 'Ice Cream Sundae',
    type: 'desert',
    image: './images/chicken-sandwich.png',
    description: 'Mashed potatoes and gravy',
    price: '299'
}, {
    name: 'Mashed Potatoes',
    type: 'side',
    image: './images/chicken-sandwich.png',
    description: 'Mashed potatoes and gravy',
    price: '299'
}, {
    name: 'Mashed Potatoes',
    type: 'side',
    image: './images/chicken-sandwich.png',
    description: 'Mashed potatoes and gravy',
    price: '299'
},
];

let productHTML = '';

product.forEach((product) => {
    productHTML += `
    <div style="
        display: flex;
        border: none;
        border-radius: 15px;
        background-color: white;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .5);
        ">
        <img src="${product.image}" alt="${product.name}" style="width: 125px; object-fit: cover;">
        <div style="padding: 5px; background-color: #dc5237; flex: 1;">
            <h3>${product.name}</h3>
            <p style="margin-top: 0; ;">${product.description}</p>
            <strong>$${product.price / 100}</strong>
        </div>
    </div>
`

}
);



document.querySelector('.js-menu-grid').innerHTML = productHTML