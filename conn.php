<?php
$host = getenv('DB_HOST');
$dbname = getenv('DB_NAME');
$username = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

// Connessione al database
$conn = new mysqli($host, $username, $password, $dbname);

// Verifica la connessione
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
