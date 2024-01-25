function incrementQuantity() {
    const quantityInput = event.target.parentElement.querySelector('.quantity-input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
    const quantityInput = event.target.parentElement.querySelector('.quantity-input');
    if (parseInt(quantityInput.value) > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}
