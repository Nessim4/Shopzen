<?php
// login.php

// Start session
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include the database configuration file
    include 'config.php';

    // Define variables and initialize with empty values
    $username = $password = "";
    $username_err = $password_err = "";

    // Validate username
    if (empty(trim($_POST["username"]))) {
        $username_err = "Please enter your username.";
    } else {
        $username = trim($_POST["username"]);
    }

    // Validate password
    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter your password.";
    } else {
        $password = trim($_POST["password"]);
    }

    // Check input errors before querying the database
    if (empty($username_err) && empty($password_err)) {
        // Prepare a select statement
        $sql = "SELECT username, password FROM user WHERE username = ?";

        if ($stmt = $conn->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("s", $param_username);

            // Set parameters
            $param_username = $username;

            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                // Store result
                $stmt->store_result();

                // Check if username exists, if yes then verify password
                if ($stmt->num_rows == 1) {
                    // Bind result variables
                    $stmt->bind_result($username, $hashed_password);
                    if ($stmt->fetch()) {
                        if (password_verify($password, $hashed_password)) {
                            // Password is correct, so start a new session
                            session_start();

                            // Store data in session variables
                            $_SESSION["loggedin"] = true;
                            $_SESSION["username"] = $username;

                            // Show alert window
                            echo '<script>alert("Login successful.");</script>';
                            // Redirect user to index.html after alert is dismissed
                            echo '<script>window.location.href = "index.html";</script>';
                            exit();
                        } else {
                            // Display an error message if password is not valid
                            echo '<script>alert("Incorrect password.");</script>';
                            // Redirect to login page
                            echo '<script>window.location.href = "login.html";</script>';
                            exit();
                        }
                    }
                } else {
                    // Display an error message if username doesn't exist
                    echo '<script>alert("No account found with that username.");</script>';
                    // Redirect to login page
                    echo '<script>window.location.href = "login.html";</script>';
                    exit();
                }
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }

            // Close statement
            $stmt->close();
        }
    }

    // Close connection
    $conn->close();
}
?>
