<?php
require "dbcontroller.php";
$conn = new medoo(array('database_type' => 'mysql',	'database_name' => 'erp',	'server' => 'localhost',	'username' => 'erp',	'password' => 'erp',	'charset' => 'utf8','port' => 3306,	'prefix' => '','option' => array(PDO::ATTR_CASE => PDO::CASE_NATURAL)));

function json($object){
    echo json_encode($object);
}
?>