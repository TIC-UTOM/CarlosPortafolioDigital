<?php 
	$nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
	$email = $_POST['correo'];
    $tel = $_POST['telefono'];
    $contenido = $_POST['message'];
	$asunto = 'Formulario de Contacto';
	$mensaje = "Nombre: ".$nombre." Apellido: ".$apellido."
        Email: $email
        Telefono: $tel
        Mensaje:".$_POST['message'];


	if(mail('konazu200@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>