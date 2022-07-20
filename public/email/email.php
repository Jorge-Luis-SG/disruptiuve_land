<?php
    $destino = "jorge.jlpm987@gmail.com";

    $sendmessage = "Se te ha enviando mas información al correo";
    $message = "Nos has brindado este correo electronico para poder darte mas informacion al respecto";

    mail($destino, $message, $sendmessage, $sendmessage );
    echo "<script>alert('Correo enviado correctamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>