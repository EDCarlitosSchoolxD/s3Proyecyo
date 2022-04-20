<?php


$data = (empty($_POST['nombre'])&& empty($_POST['asunto'])&& empty($_POST['mensaje'])&& empty($_POST['email']));



if(!$data){
    echo "Si hay data";
    echo $_POST['nombre'];

    $destinatario = "uxdj050728hqrczna1@cbtis111.edu.mx";
    
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde la pagina de EDCarlitosxD";

    $mensajeCompleto = $mensaje . "\nAtentamente:". $nombre;

    mail($destinatario,$asunto,$mensajeCompleto,$header);

    echo "Enviado correctamente";



}else{
    echo "no hay data";

}