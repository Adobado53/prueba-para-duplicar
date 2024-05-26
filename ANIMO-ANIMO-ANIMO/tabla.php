<?php

// Database connection parameters
$dbHost = "localhost";
$dbUsername = "username";
$dbPassword = "password";
$dbName = "your_database_name";

// Create connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_description TEXT,
    product_image VARCHAR(255)
)";

if ($conn->query($sql) === FALSE) {
    die("Error creating table: " . $conn->error);
}

// Close connection
$conn->close();

