<?php
include 'config.php'; // Include the database configuration file

// Define variables and initialize with empty values
$username = $email = $password = $address = "";
$username_err = $email_err = $password_err = $address_err = "";

// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Validate username
    if (empty(trim($_POST["username"]))) {
        $username_err = "Please enter a username.";
    } else {
        $username = trim($_POST["username"]);
    }

    // Validate email
    if (empty(trim($_POST["email"]))) {
        $email_err = "Please enter an email.";
    } elseif (!filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
        $email_err = "Please enter a valid email.";
    } else {
        $email = trim($_POST["email"]);
    }

    // Validate password
    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter a password.";
    } elseif (strlen(trim($_POST["password"])) < 6) {
        $password_err = "Password must have at least 6 characters.";
    } else {
        $password = trim($_POST["password"]);
    }

    // Validate address
    if (empty(trim($_POST["address"]))) {
        $address_err = "Please enter an address.";
    } else {
        $address = trim($_POST["address"]);
    }

    // Check input errors before inserting into database
    if (empty($username_err) && empty($email_err) && empty($password_err) && empty($address_err)) {

        // Prepare an insert statement
        $sql = "INSERT INTO user (username, email, password, address) VALUES (?, ?, ?, ?)";

        if ($stmt = $conn->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("ssss", $param_username, $param_email, $param_password, $param_address);

            // Set parameters
            $param_username = $username;
            $param_email = $email;
            $param_password = password_hash($password, PASSWORD_DEFAULT); // Creates a password hash
            $param_address = $address;

            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                // Close statement
                $stmt->close();

                // Show alert window
                echo '<script>alert("Signup successful.");</script>';
                // Redirect to login page after alert is dismissed
                echo '<script>window.location.href = "login.html";</script>';
                exit();
            } else {
                echo "Something went wrong. Please try again later.";
            }
        }
    }

    // Close connection
    $conn->close();
}
?>

