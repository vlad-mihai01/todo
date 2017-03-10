<?php

session_start();
//header('Content-Type: application/json');

$DB_HOST = "localhost";
$DB_USERNAME = "kea_php_user";
$DB_PASSWORD = "kea_php";
$DB_DATABASE = "udemy_php";

$db = new mysqli($DB_HOST, $DB_USERNAME,$DB_PASSWORD,$DB_DATABASE);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

 ?>
