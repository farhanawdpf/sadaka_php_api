<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sadaka";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$amount = $data->amount;
$firstName = $data->firstName;
$lastName = $data->lastName;
$email = $data->email;
$phone = $data->phone;
$address = $data->address;
$note = $data->note;

$sql = "UPDATE donnetions SET amount='$amount', firstName='$firstName', lastName='$lastName', email='$email', phone='$phone', address='$address', note='$note' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Donation updated successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
