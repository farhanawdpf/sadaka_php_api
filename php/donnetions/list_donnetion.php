<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sadaka";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM donnetions";
$result = $conn->query($sql);

$donations = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $donations[] = $row;
    }
}

echo json_encode($donations);

$conn->close();
?>
