<?php 
//Create Record
$json = file_get_contents('http://php://input');
$data = json_decode($json);
//Record in DB and return a status message if data was inserted correctly etc.. 
header('Content-Type: application/json');
echo json_encode($response);
?>