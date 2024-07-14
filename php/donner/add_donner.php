<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con=new mysqli('localhost','root','','sadaka');

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$address = $_POST['address'];
$email = $_POST['email'];
$password = $_POST['password'];


$query = "insert into add_donner(fname,lname,address,email,password)values('$fname ','$lname','$address','$email','$password')";
if ($fname != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}