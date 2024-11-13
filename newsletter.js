document.addEventListener('DOMContentLoaded', function() {
    // Select the subscribe button
    const subscribeBtn = document.getElementById('subscribe-btn');

    // Add event listener to the subscribe button
    subscribeBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email input value
        const emailInput = document.getElementById('email-input').value;
        
        // Check if the email input is valid
        if (validateEmail(emailInput)) {
            // Display the modal overlay
            document.getElementById('overlay').style.display = 'block';
            
            // Update the email placeholder in the modal
            document.getElementById('emailPlaceholder').textContent = emailInput;
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// Function to validate email address using regex
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Function to close the modal overlay
function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}
