<?php 
$name = $_POST['name'];
$email = $_POST ['email'];
$message = $_POST['message'];

$to = 'nithishvj2605@gmail.com';
$subject = "sample subject";

$finalmessage = "Name : " . $name ." \r\n  Email=".$email."\r\n Message=".$message ;

?>