<?php
header('Content-Type: application/json');
require_once './db.php';

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$account_id = $input["account_id"];

$query_retrieve_tasks = "SELECT * FROM Tasks WHERE account_id=$account_id";

$results_retrieve_tasks = $db->query($query_retrieve_tasks);
$tasks=array();

while ($row = $results_retrieve_tasks->fetch_assoc()) {

  $task = [
            'text'=>$row['task_text'],
            'id'=>$row['task_id'],
            'deadline'=>$row['task_deadline'],
            'done'=>$row['task_done']
          ];
  $tasks[]=$task;
}

$tasks=json_encode(array('tasks'=>$tasks));
echo $tasks;


?>
