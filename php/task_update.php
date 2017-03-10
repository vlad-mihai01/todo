<?php
header('Content-Type: application/json');
require_once './db.php';

$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$task_text = $input["text"];
//$deadline = $input["deadline"];
$task_id = $input["task_id"];
$done = $input["done"];

//if ($deadline==false) {
  $query_create_task = "UPDATE Tasks SET task_text='$task_text', task_done=$done WHERE task_id=$task_id";
//}else {
//  $query_create_task = "UPDATE Tasks SET task_text='$task_text', task_deadline='$deadline' WHERE task_id=$task_id";
//}

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
