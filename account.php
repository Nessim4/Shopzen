<?php
// account.php

// Start session
session_start();

// Check if user is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.html");
    exit;
}

// Include the database configuration file
include 'config.php';

// Prepare a select statement
$sql = "SELECT username, email, address FROM user WHERE id = ?";

if ($stmt = $conn->prepare($sql)) {
    // Bind the parameter
    $stmt->bind_param("i", $param_id);

    // Set parameter
    $param_id = $_SESSION["id"];

    // Attempt to execute the prepared statement
    if ($stmt->execute()) {
        // Store result
        $stmt->store_result();

        // Check if username exists, if yes then fetch the data
        if ($stmt->num_rows == 1) {
            // Bind result variables
            $stmt->bind_result($username, $email, $address);
            if ($stmt->fetch()) {
                // User data retrieved successfully
                $userData = array(
                    'username' => $username,
                    'email' => $email,
                    'address' => $address
                );
            }
        }
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();

// Pass user data to the account.html page using session or query parameter
$_SESSION['userData'] = $userData;
header("location: account.html");
?>
