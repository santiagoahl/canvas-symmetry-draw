var texto=document.getElementById("textin");
var botoon=document.getElementById("botoncito");

botoon.addEventListener("click",dibujoPorClick); //disparamos la funcion cuando ocurre el eveto click

var d = document.getElementById("Dibujito"); //aqui vamos a guardar el CANVAS (id)
var lienzo = d.getContext("2d");   //metodo del objeto canvas);
var ancho= d.width;
//var lineas =30 ;
var l;

//dibujamos cuadratito xd
dibujarLinea("blue", 0, 0, 600, 0);
dibujarLinea("blue", 600, 0, 600, 600);
dibujarLinea("blue", 600, 600, 0, 600);
dibujarLinea("blue", 0, 600, 0, 0);

//INICIAMOS CICLO



function dibujarLinea(color,x0,y0,xf,yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x0,y0);
  lienzo.lineTo(xf,yf);
  lienzo.stroke(); //Ejecutamos el DIBUJO
  lienzo.closePath(); //finalizamos dibujo
}

function dibujoPorClick()
{
  var x = parseInt(texto.value); //con este atributo le doy valor a texto (lo pido)
  var e = 300/x;
  console.log(e);
  console.log(x);
  //var e=10//asignamos variable que defina espacio entre lineas
 console.log(e);
 for(l=0;l<x;l++) //torre eiffel xd
 {
  dibujarLinea("red", 0, 300-(e*l), e*(l+1), 0);            //cuad I
  dibujarLinea("red", 300+(e*l), 0, 600, e*(l+1));            //cuad II
  dibujarLinea("red", 0, 300+(e*l), e*(l+1), 600);            //cuad III
  dibujarLinea("red", 300+(e*l), 600, 600, 600-(e*(l+1)));  //cuad IV
//console.log("linea " + l+1)
 }

}
