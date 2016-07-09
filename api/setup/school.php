<?php
require '../connection.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if(isset($_GET['action'])){
    
    if($_GET['action']=='getSchoolDetails'){
        $result=$conn->select("erp_schools","*");
        json($result);
    }
}

if(isset($_POST)){
    
}
?>