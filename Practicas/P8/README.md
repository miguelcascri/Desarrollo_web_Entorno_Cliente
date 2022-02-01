# Practica 8

## Miguel Castilla Criado

### **INTRO STAR WAR**

<a href= '../Practicas/../README.md'>Pagina Principal</a>

<a href= '../P8/'>Ficheros Practica 8</a>

### **Index.html**

Este es el archivo en el que se encuentra el contenido a mostrar, con las clases necesarias y al final el audio de la intro.

    <body>
        <script src="http://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="app.js"></script>
        <script type="text/javascript"></script>

        <center>
            <img src="imagenes/logo1.jpg" id="show">

        </center>
        <div class="container">
            <div class="containerintro">
                <h1 class="textointro">Episodio I <br><br> LA AMENAZA FANTASMA</h1>
                <br>
                <p>
                    La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas
                    estelares exteriores están en disputa.
                </p>
                <p>
                    Esperando resolver el asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación de
                    Comercio ha detenido todos los envíos al pequeño planeta de Naboo.
                </p>
                <p>
                    Mientras el Congreso de la República debate interminablemente esta alarmante cadena de acontecimientos,
                    el Canciller Supremo ha enviado en secreto a dos Caballeros Jedi, guardianes de la paz y la justicia en
                    la galaxia, para resolver el conflicto....
                </p>
            </div>
        </div>
        <audio class="audio">
            <source src="audio.mp3" onloadeddata="var audio = this; setTimeout(function(){audio.play();},2000)">
        </audio>
    </body>

#### **Estilos.css**

Este archivo contiene las variables y valores para darle estilos a las etiquetas del archivo index.html

    body, html {
        margin: 0;
        padding: 0;
        background: #000 url('imagenes/galaxy.jpg') center;
        font-size: 16px;
        font-family: impact;
        font-weight: 500;
    }

    .container {
        margin: auto;
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        perspective: 500px;
        overflow: hidden;
        text-align: center;
    }

    .containerintro {
        top: 0%;
        margin: auto;
        width: 100%;
        max-width: 400px;
        position: relative;
        font-size: 1.8em;
        color: #e8be1e;
        text-align: justify;
        transform: rotateX(30deg) scale(2);
    }

    h1 {
        font-size: 2em;
        text-align: center;
    }

    #primero{
        size: 100%;
    }

#### **App.js**

Este archivo contiene las funciones con las que se realiza la animacion.
  

    $(document).ready(function(){
    setTimeout(function(){
    inicio();
    },3000);
    scale();
    setTimeout(function(){
    	scale();
    },3000);
    });

    var tamaño=3;
    var posicion = 230;
    var angulo = 60;
    var altura =1;
    var altura2 = 0.008;
    var velocidad = 50;

Esta  función realiza los cambios para que de el efecto de profundidad y sea continuo

    function scale(){
    tamaño = tamaño - altura2;
    posicion = posicion -altura;
    if(posicion<80){
        altura = 0.4;
        altura2 = 0.006;
    }
    if(posicion<40){
        altura = 0.2;
        altura2 = 0.003;
    }
    if(posicion<20){
        altura = 0.1;
        altura2 = 0.001;
    }
    $(".containerintro").css({'top' : posicion + "%","transform" : "rotateX(" + angulo + "deg) scale(" + tamaño + ")"})

        if(posicion> -30){
            setTimeout(scale,velocidad);
        }else{
            $('.containerintro').fadeTo(2000,0.5);
        }

    }


    function inicio() {
    $('#show').fadeOut(2000);
    }


[Volver arriba](#Practica-8)
