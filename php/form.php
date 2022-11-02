<?php
$name = $_POST['user'];
$mail = $_POST['mail'];
$regulamin = $_POST['checkbox'];
$errors = [];
    if(strlen($name) < 1){
      $errors['e_name'] = "To pole nie może pozostać puste!";
    }
    if(!filter_var($mail, FILTER_VALIDATE_EMAIL)){
      $errors['e_mail'] = "Ten e-mail jest niepoprawny!";
    }
    if($regulamin != "true"){
      $errors['e_regulamin'] = "Musisz zaakceptować regulamin!";
    }
    if(count($errors)>0){
      echo json_encode([ 'wynik' => "error", 'errors' => $errors ]);
    } else {
      echo json_encode([ 'wynik' => "OK" ]);
    }
 ?>
