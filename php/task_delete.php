<?php
header('Content-Type: application/json');
require_once './db.php';

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$task_id = $input["task_id"];

$query_delete_task = "DELETE FROM Tasks WHERE task_id=$task_id";

$result_delete_task = $db->query($query_delete_task);

if (!$result_delete_task) {
    $response = json_encode(array("error"=>1));
    echo $response;
    die("Query FAILED !!!!" . mysqli_error($db));
  }else {
    $response = json_encode(array("error"=>0));
    echo $response;
  }

?>
