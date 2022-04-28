<?php
$phone = $_POST['tel'];
$name = $_POST['tel'];
$order_name = $_POST['order_name'];
$amount = $_POST['amount'];
$subject = 'Ах Бумага!';
$message = 'Телефон клиента: ' .$phone .' Заказ: ' .$order_name .' Кол-во: '.$amount;

$address = "makarichak1209@gmail.com";//адрес куда будет отсылаться сообщение для администратора
$send = mail($address,$subject,$message);//вызов функции отправки сообщения на сервере

if ($send) //проверяем, отправилось ли сообщение
	$response['done'] = 'Email sending done';
else
	$response = "error";
	// header('Content-type: application/json');
	echo json_encode($response);
?>