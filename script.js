document.addEventListener('DOMContentLoaded', (event) => {
  // Load the cart count from localStorage
  loadCartCount();

  // Select all buttons with the class 'toggleButton'
  const buttons = document.querySelectorAll('.toggleButton');

  // Loop through each button and add an event listener
  buttons.forEach(button => {
      button.addEventListener('click', function(event) {
          // Prevent the default button behavior
          event.preventDefault();

          // Handle icon toggle and cart count update
          toggleButtonAndCartCount(this);

          // Get the product element and add it to the cart
          const productElement = event.target.closest('.product');
          addToCart(productElement);
      });
  });
});


function loadCartCount() {
  var cartCountElement = document.getElementById("cart-count");
  var cartCount = localStorage.getItem('cartCount') || 0;
  cartCountElement.textContent = cartCount;
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.addEventListener('click', function(event) {
    var window = document.getElementById("window");
    var windowContent = document.querySelector(".window-content");
    var closeButton = document.querySelector(".close");
    
    if (event.target !== window && event.target !== windowContent && event.target !== closeButton) {
      window.style.display = "none";
    }
  });
  
  function toggleWindow() {
    var window = document.getElementById("window");
    if (window.style.display === "block") {
      window.style.display = "none";
    } else {
      window.style.display = "block";
    }
  }

function toggleForm() {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}
// Attach event listener to the subscribe button
subscribeBtn.addEventListener('click', subscribe);

const openShopping=document.querySelector(".openShopping");
const closeShopping=document.querySelector(".closeShopping");
const list= document.querySelector(".listcard");
const total=document.querySelector(".total");
const body=document.querySelector("body");
const quantity=document.querySelector(".quantity");

document.addEventListener('DOMContentLoaded', function() {
  // Get the button and overlay element
  const messageBtn = document.getElementById('message-btn');
  const overlay1 = document.getElementById('overlay1');

  // Attach event listener to the button
  messageBtn.addEventListener('click', function() {
      toggleWindow();
  });

  // Close modal when clicking outside of it
  document.addEventListener('click', function(event) {
      if (event.target !== overlay1 && event.target.closest(".modal1") === null) {
          overlay1.style.display = "none";
      }
  });

  function toggleWindow() {
      if (overlay1.style.display === "block") {
          overlay1.style.display = "none";
      } else {
          overlay1.style.display = "block";
      }
  }
});

// Function to toggle the cart
function toggleCart() {
  var cart = document.getElementById("cart");
  cart.classList.toggle("show");
}

// Event listener to close the cart if clicked outside of it
window.addEventListener('click', function(event) {
  var cart = document.getElementById("cart");

  if (event.target !== shoppingIcon && event.target !== cart && !cart.contains(event.target)) {
      cart.classList.remove("show");
  }
});

// Event listener for the shopping icon click
shoppingIcon.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the window
  toggleCart();
});

// Event listener for closing the cart
closeShopping.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the window
  toggleCart();
});
// Function to toggle the cart
function toggleCart() {
  var cart = document.getElementById("cart");
  cart.classList.toggle("show");
}

// Function to update the cart count
function updateCartCount(count) {
  var cartCount = document.getElementById("cart-count");
  cartCount.textContent = count;
}

// Example function to simulate adding items to the cart
function addItemToCart() {
  // Increment the cart count
  var count = parseInt(document.getElementById("cart-count").textContent);
  updateCartCount(count + 1);
}

// Event listener for the shopping icon click
shoppingIcon.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the window
  toggleCart();
});

// Event listener for closing the cart
closeShopping.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the window
  toggleCart();
});
document.getElementById("toggleButton").addEventListener("click", function() {
  var icon = this.querySelector("i");
  if (icon.classList.contains("fa-plus")) {
      // If the plus icon is currently shown, change it to the check icon
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-check");
  } else {
      // If the check icon is currently shown, change it to the plus icon
      icon.classList.remove("fa-check");
      icon.classList.add("fa-plus");
  }
});



