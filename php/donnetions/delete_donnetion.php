<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sadaka";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_GET['id'];

$sql = "DELETE FROM donnetions WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Donation deleted successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
