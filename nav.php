<?php
// Start session
session_start();

// Define response array
$response = array();

// Check if user is logged in
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    // If logged in, set response to show Account link
    $response['loggedIn'] = true;
} else {
    // If not logged in, set response to show Log in link
    $response['loggedIn'] = false;
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
