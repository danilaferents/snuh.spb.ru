<?php 
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['text'])){
  
//   $headers = 'From: Admen\r\n'.
//              'Reply-To: denif99@mail.ru\r\n'.
//               'X-Mailer: PHP/'. phpversion();
             
//   $theme = 'Новое сообщение';

   $letter = 'Данные сообщения:\r\n';
   $letter .='Имя: '.$_POST['name'].'\r\n';
   $letter .='Email: '.$_POST['email'].'\r\n';
   $letter .='Сообщение: '.$_POST['text'].'\r\n';
  
//   if (mail('denif99@mail.ru', $theme, $letter, $headers)){
//     echo "Сообщение отправлено!";
//   } else {
//     echo "Ошибка при отправке!";
//   }
// } else {
//   echo "Ошибка: Заполните все поля!";
// }

	require_once "SendMailSmtpClass.php";
    $mailSMTP = new SendMailSmtpClass('danilaferents@gmail.com', 'FFEEDD99ddee', 'ssl://smtp.gmail.com', 'From', 465);
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: From<yourmail@gmail.com>\r\n";
    $result =  $mailSMTP->send('denif99@mail.ru', 'Subject', $letter, $headers);
    if ($result) {
    	echo "sentmail";
    }
} else if (empty($_POST['name'])) {
	echo "noname";
} else if (empty($_POST['email'])) {
	echo "noemail";
} else echo "notext";