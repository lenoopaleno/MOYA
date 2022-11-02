<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$name = $_POST['user'];
$newmail = $_POST['mail'];
$regulamin = $_POST['checkbox'];
$errors = [];

    if(strlen($name) < 1){
      $errors['e_name'] = "To pole nie może pozostać puste!";
    }
    if(!filter_var($newmail, FILTER_VALIDATE_EMAIL)){
      $errors['e_mail'] = "Ten e-mail jest niepoprawny!";
    }
    if($regulamin != "true"){
      $errors['e_regulamin'] = "Musisz zaakceptować regulamin!";
    }
    if(count($errors)>0){
      echo json_encode([ 'wynik' => "error", 'errors' => $errors ]);
    } else {
      echo json_encode([ 'wynik' => "OK" ]);
        $mail = new PHPMailer(true);
        
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        $mail->Username = "moyanewsletter@gmail.com";
        $mail->Password = "ubluhtrcjoqucrvb";
        $mail->SMTPSecure = "ssl";
        $mail->Port = 465;

        $mail->setFrom("moyanewsletter@gmail.com");
        $mail->addAddress("mateusz.grabczewski002@gmail.com");
        $mail->isHTML(true);

        $mail->Subject = "Nowy uzytkownik!";
        $mail->Body = "O kontakt prosi: ".$name."     *********      "."Adres mailowy to:  ".$newmail;
        $mail->send();
    }
?>
