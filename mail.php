<?php

$phone = $_POST['tel'];
$subject = 'Ах Бумага!';
$message = 'Телефон клиента: ' .$phone; 

$address = "makarichak1209@gmail.com";//адрес куда будет отсылаться сообщение для администратора
$send = mail($address,$subject,$message);//собственно сам вызов функции отправки сообщения на сервере

if ($send) //проверяем, отправилось ли сообщение
	$response['done'] = 'Email sending done';
else
	$response = "error";
	// header('Content-type: application/json');
	echo json_encode($response);
?>