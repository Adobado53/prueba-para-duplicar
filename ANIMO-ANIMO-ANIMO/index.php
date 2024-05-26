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

// Fetch products from the database
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div class='product-item'>
            <h3>" . $row['product_name'] . "</h3>
            <p>" . $row['product_description'] . "</p>
            <img src='" . $row['product_image'] . "' alt='" . $row['product_name'] . "'>
            <span class='price'>$" . $row['product_price'] . "</span>
            <button class='add-to-cart'>Add to Cart</button>
        </div>";
    }
} else {
    echo "No products found";
}

// Close connection
$conn->close();
