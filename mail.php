<meta http-equiv='refresh' content='3; url=https://you-hands.ru'>
<meta charset="UTF-8" />
<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'php-mailer/src/Exception.php';
	require 'php-mailer/src/PHPMailer.php';



//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'php-mailer/language/');
$mail->IsHTML(true);

//от кого
$mail->setForm('asda@vh118.hoster.by', 'Ах Бумага!');
//кому
$mail->addAddress('makarichak1209@gmail.com', 'Ах Бумага!');
//тема письма
$mail->Subject = 'Заявка на покупку бумаги А4';

$mailBody = '<h1>Заявка на покупку бумаги</h1>';

if(trim(!empty($_POST['email']))) {
	$body .= '<p><strong>Email:</strong> ' .$_POST['email'].'</p>';
}
if(trim(!empty($_POST['phone']))) {
	$body .= '<p><strong>Телефон:</strong> ' .$_POST['phone'].'</p>';
}

$mail->Body = $mailBody;

//отправка
if (!$mail->send()) {
	$message = 'Ошибка отправки';
} else {
	$message = 'Готово';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);


	// if (isset($_POST['name']) && $_POST['name'] != "")//если существует атрибут NAME и он не пустой то создаем переменную для отправки сообщения
	// 	$name = $_POST['name'];
	// else die ("Не заполнено поле \"Имя\"");//если же атрибут пустой или не существует то завершаем выполнение скрипта и выдаем ошибку пользователю.

	// if (isset($_POST['email']) && $_POST['email'] != "") //тут все точно так же как и в предыдущем случае
	// 	$email = $_POST['email'];
	// else die ("Не заполнено поле \"Email\"");

	// if (isset($_POST['subjects']) && $_POST['subjects'] != "") 
	// 	$sub = $_POST['subjects'];
	// else die ("Не заполнено поле \"Тема\"");

	// if (isset($_POST['message']) && $_POST['message'] != "") 
	// 	$body = $_POST['message'];
	// else die ("Не заполнено поле \"Сообщение\"");
	 


	// $address = "makarichak1209@gmail.com";//адрес куда будет отсылаться сообщение для администратора
	// $mes  = "Имя: $name \n";	//в этих строчках мы заполняем текст сообщения. С помощью оператора .= мы просто дополняем текст в переменную
	// $mes .= "E-mail: $email \n";
 	// $mes .= "Тема: $sub \n";
 	// $mes .= "Текст: $body"; 
	// $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");//собственно сам вызов функции отправки сообщения на сервере

	// if ($send) //проверяем, отправилось ли сообщение
	// 	echo "Сообщение отправлено успешно! Перейти на <a href='https://You-hands.ru/'>you-hands.ru</a>, если вас не перенаправило вручную.";
	// else 
	// 	echo "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере";
		 
?>