document.addEventListener('DOMContentLoaded', function() {
    let iconCart = document.querySelector('.shopping');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.closed');
  
    iconCart.addEventListener('click', () => {
        body.classList.toggle('showcart');
    });
  
    closeCart.addEventListener('click', () => {
        body.classList.toggle('showcart');
    });
});
function toggleButtonAndCartCount(button) {
    var icon = button.querySelector("i");
    var cartCountElement = document.getElementById("cart-count");
    var cartCount = parseInt(cartCountElement.textContent);
  
    if (icon.classList.contains("fa-plus")) {
        // If the plus icon is currently shown, change it to the check icon and increment cart count
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-check");
        cartCount += 1;
    } else {
        // If the check icon is currently shown, change it to the plus icon and decrement cart count
        icon.classList.remove("fa-check");
        icon.classList.add("fa-plus");
        cartCount -= 1;
    }
  
    // Update the cart count in the element and save it to localStorage
    cartCountElement.textContent = cartCount;
    localStorage.setItem('cartCount', cartCount);
  }
  
  // Function to add a product to the cart
  function addToCart(productElement) {
    // Extract product details from the product element
    const productName = productElement.querySelector('.productname').innerText;
    const productPrice = productElement.querySelector('.productprice').innerText;
  
    // Log the product details to the console (you can replace this with actual cart logic)
    console.log(`Product added to cart: ${productName} - ${productPrice}`);
  }
  
  
  function toggleButtonAndCartCount(button) {
    var icon = button.querySelector("i");
    var cartCountElement = document.getElementById("cart-count");
    var cartCount = parseInt(cartCountElement.textContent);
  
    if (icon.classList.contains("fa-plus")) {
        // If the plus icon is currently shown, change it to the check icon and increment cart count
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-check");
        cartCount += 1;
    } else {
        // If the check icon is currently shown, change it to the plus icon and decrement cart count
        icon.classList.remove("fa-check");
        icon.classList.add("fa-plus");
        cartCount -= 1;
    }
  
    cartCountElement.textContent = cartCount;
  }
  
  // Function to add a product to the cart
  function addToCart(productElement) {
    // Extract product details from the product element
    const productName = productElement.querySelector('.productname').innerText;
    const productPrice = productElement.querySelector('.productprice').innerText;
  
    // Log the product details to the console (you can replace this with actual cart logic)
    console.log(`Product added to cart: ${productName} - ${productPrice}`);
  }