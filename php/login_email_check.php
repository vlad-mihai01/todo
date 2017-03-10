<?php
header('Content-Type: application/json');
require_once './db.php';

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$email = $input["email"];

$query_email_validation = 'SELECT account_email FROM Accounts';
$results_email_validation = $db->query($query_email_validation);

$is_email = 0;

while(($row = $results_email_validation->fetch_assoc()) && ($is_email == 0)){
  if ($email == $row['account_email']) {
    $is_email = 1;
  }
}

if ($is_email == 1) {
  $response = json_encode(array('email'=>true));
  echo $response;
  die();
}else {
  $response = json_encode(array('email'=>false));
  echo $response;
}

 ?>
