<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sadaka";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM volunteers";
$result = $conn->query($sql);

$volunteers = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $volunteers[] = $row;
    }
}

echo json_encode($volunteers);

$conn->close();
?>
