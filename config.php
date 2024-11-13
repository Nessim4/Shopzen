<?php
// Database configuration
$dbHost = 'localhost'; // or your database host name or IP address
$dbUsername = 'root'; // your database username
$dbPassword = '26638589'; // your database password
$dbName = 'users1'; // your database name

// Establish database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    echo "Connected successfully";

}

// Optional: Set character set to utf8
$conn->set_charset("utf8");
?>