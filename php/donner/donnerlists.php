<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST,Delete');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','sadaka');
$data=$con->query('select * from add_donner order by id desc')->fetch_all(MYSQLI_ASSOC);
print_r($data);
header('Content-Type: Application/json');
echo json_encode($data);