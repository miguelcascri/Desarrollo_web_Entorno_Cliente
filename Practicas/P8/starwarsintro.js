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