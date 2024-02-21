document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart__products');

    products.forEach(product => {
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').getAttribute('src');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addToCartBtn = product.querySelector('.product__add');

        const addToCart = () => {
            const existingCartItem = cart.querySelector(`.cart__product[data-id="${productId}"]`);
            if (existingCartItem) {
                const countElement = existingCartItem.querySelector('.cart__product-count');
                countElement.textContent = parseInt(countElement.textContent) + parseInt(quantityValue.textContent);
            } else {
                const cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.setAttribute('data-id', productId);
                cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${quantityValue.textContent}</div>
                `;
                cart.append(cartProduct);
            }
        };

        product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            if (parseInt(quantityValue.textContent) > 1) {
                quantityValue.textContent--;
            }
        });

        product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            quantityValue.textContent++;
        });

        addToCartBtn.addEventListener('click', addToCart);
    });
});