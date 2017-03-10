<?php
header('Content-Type: application/json');
require_once './db.php';

$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$task_text = $input["text"];
//$deadline = $input["deadline"];
$account_id = $input["account_id"];
$done = $input["done"];

//if ($deadline==false) {
  $query_create_task = "INSERT INTO Tasks (task_text, account_id, task_done) VALUES ('$task_text', '$account_id', $done)";
// }else {
//   $query_create_task = "INSERT INTO Tasks (task_text, task_deadline, account_id, task_done) VALUES ('$task_text', '$deadline', '$account_id', '$done')";
// }

$result_create_task = $db->query($query_create_task);

if (!$result_create_task) {
    $response = json_encode(array("error"=>true));
    echo $response;
    die("Query FAILED !!!!" . mysqli_error($db));
  }else {
    $response = json_encode(array("error"=>false));
    echo $response;
  }

 ?>
