<?php
header('Content-Type: application/json');
require_once './db.php';

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

//$username = $input["username"];
$email = $input["email"];
$password = $input["password"];
$first_name = $input["first_name"];
if (isset($input["last_name"])) {
  $last_name = $input["last_name"];
}else {
  $last_name = '';
}
//$query_email_validation = 'SELECT account_email FROM udemy_php.Accounts';
//$query_username_validation = 'SELECT account_username FROM udemy_php.Accounts';
$query_create_account = "INSERT INTO Accounts (account_email, account_password, account_first_name, account_last_name) VALUES ( '$email', '$password', '$first_name', '$last_name')";

//$results_email_validation = $db->query($query_email_validation);
//$results_username_validation = $db->query($query_username_validation);

$result_create_account = $db->query($query_create_account);

if (!$result_create_account) {
    $response = json_encode(array("error"=>true));
    echo $response;
    die("Query FAILED !!!!" . mysqli_error($db));
  }else {
    $response = json_encode(array("error"=>false));
    echo $response;
  }

 ?>
