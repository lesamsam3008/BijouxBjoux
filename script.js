// Gestion du Panier
const cart = [];

// Ajouter au panier
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Ajouter l'article au panier
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        alert(`${productName} a été ajouté au panier.`);
        updateCart();
    });
});

// Mettre à jour le panier
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    if (!cartItemsContainer) return;

    // Effacer les éléments existants
    cartItemsContainer.innerHTML = '';

    // Ajouter les articles du panier
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - ${item.quantity} x ${item.price}€</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Afficher le total
    totalPriceContainer.textContent = `${totalPrice.toFixed(2)}€`;
}