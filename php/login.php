<?php
header('Content-Type: application/json');
require_once './db.php';

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$email = $input["email"];
$password = $input["password"];

$query_login = "SELECT * FROM Accounts WHERE account_email='$email'";
$results_login = $db->query($query_login);

$is_email = 0;

$row = $results_login->fetch_assoc();


if ($row['account_password'] == $password) {
  $_SESSION["login"]=true;

  $account = array(
                    "id"=>$row['account_id'],
                    "username"=>$row['account_username'],
                    "email"=>$row['account_email'],
                    "first_name"=>$row['account_first_name'],
                    "last_name"=>$row['account_last_name']
                    );

  $response = json_encode(array("account"=>$account));
  echo $response;
}else {
  $response = json_encode([
    'status' => 'error',
    'error' => ['password' => 'Wrong password!']
  ]);
  echo $response;
}


// if ($is_email == 1) {
//   $response = json_encode(array('email'=>true));
//   echo $response;
//   die();
// }else {
//   $response = json_encode(array('email'=>false));
//   echo $response;
// }




 ?>
