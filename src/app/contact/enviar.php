<?php 
	$nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
	$email = $_POST['correo'];
    $tel = $_POST['telefono'];
    $mensaje = $_POST['message'];
	$asunto = 'Formulario de Contacto';
	$mensaje = "Nombre: ".$nombre." Apellido: ".$apellido."<br>
        Email: $email<br>
        Telefono: $telefono<br>
        Mensaje:".$_POST['message'];


	if(mail('tuEmail', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>