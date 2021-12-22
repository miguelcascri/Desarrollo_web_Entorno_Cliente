<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="estilos.css" rel="stylesheet" type="text/css">
    <title>Practica 6</title>
</head>

<body>
    <div id="cuerpo">
        <h2>Datos de Usuario</h2>
    
    <?php
    error_reporting(0);


    $nombre = $_POST['name'];
    $apellido1 = $_POST['apellido1'];
    $apellido2 = $_POST['apellido2'];
    $genero = $_POST["genero"];
    $email = $_POST["email"];
    $fecha = $_POST["date"];



    echo "<h4>Nombre y apellidos</h4>" . $nombre . " " . $apellido1 . " " . $apellido2 . "<br>";
    echo "<br> <h5>Correo Electrónico</h5>" . $email . "<br>";

    if ($genero == null) {

        echo "<br> <h5>Género</h5> No especificado <br>";
    } else {
        echo "<br> <h5>Género</h5>" . $genero . "<br>";
    }

    echo "<br> <h5>Fecha de Nacimiento</h5>" . $fecha . "<br>";


    ?>
    <a href="index.html"><button class="botones">Volver a la pagina de inicio</button> </a>
    </div>
</body>

</html>