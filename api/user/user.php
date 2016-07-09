<?php
include '../connection.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if(isset($_POST)){
   
  $data = json_decode(file_get_contents('php://input'), true);
 
 $userid=$data["UserName"];
 
 $user=$conn->select("usr_logins",'*',array("loginid"=>$userid));
 json($user);
}
?>