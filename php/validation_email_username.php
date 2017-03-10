<?php
header('Content-Type: application/json');
require_once './db.php';

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

//$username = $input["username"];
$email = $input["email"];
$field = $input["field"];

$query_email_validation = 'SELECT account_email FROM Accounts';
$query_username_validation = 'SELECT account_username FROM Accounts';

    $error = 0;

switch ($field) {
  case 'email':
    $results_email_validation = $db->query($query_email_validation);
    while(($row = $results_email_validation->fetch_assoc()) && ($error == 0)){
      if ($email == $row['account_email']) {
        $error = 1;
      }
    }

    if ($error == 1) {
      $response = json_encode(array('error'=>true, 'message'=>'E-mail already exists.'));
      echo $response;
      die();
    }else {
      $response = json_encode(array('error'=>false, 'message'=>''));
      echo $response;
    }
    break;

  case 'username':
    $results_username_validation = $db->query($query_username_validation);

    while(($row = $results_username_validation->fetch_assoc()) && ($error == 0)){
      if ($username == $row['account_username']) {
        $error = 1;
      }
    }

    if ($error == 1) {
      $response = json_encode(array('error'=>1, 'message'=>'Username already exists.'));
      echo $response;
      die();
    }else {
      $response = json_encode(array('error'=>0, 'message'=>''));
      echo $response;
    }
    break;

  default:
    # code...
    break;
}

 ?>
