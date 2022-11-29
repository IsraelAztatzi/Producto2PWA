let canvas = document.getElementById("canvas");
var anchura = canvas.width;
var altura = canvas.height;
var cd = canvas.getContext("2d");
document.getElementById("btnAlgo").addEventListener("click", algo1);
var arrxy = new Array(2);
dibujarCuadros();
dibujarlineaspqñas();
dibujarnumeros();
function algo1(){
	//alert('Hola');
	var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    var c = document.getElementById("txtc").value;
    var d = document.getElementById("txtd").value;
    var e = document.getElementById("txte").value;
    var f = document.getElementById("txtf").value;
    var x1 = document.getElementById("txtx1").value;
	var x2 = document.getElementById("txtx2").value;
	var x3 = document.getElementById("txtx3").value;
	var x4 = document.getElementById("txtx4").value;
	var arr = new Array(2);
    s2el(a,b,c,d,e,f, arrxy)
    document.getElementById("res").innerHTML =  "("+a+"x"+" + "+b+"y"+" = "+c+")";
    document.getElementById("res2").innerHTML = "("+d+"x"+" + "+e+"y"+" = "+f+")";
    document.getElementById("res3").innerHTML =  "x: " + arrxy[0];
    document.getElementById("res4").innerHTML =  "y: " + arrxy[1];
	calcular2(a,b,c,x1,x2,arr);
	var arr2 = new Array(2);
	calcular3(d,e,f,x3,x4,arr2);
    dibujarlineaazul(a,b,c,x1, x2, arr);
    dibujarlineaverde(d,e,f,x3, x4, arr2);
    dibujarinterseccion(arrxy);
}
function dibujarCuadros()
{
    cd.beginPath();
    cd.strokeStyle = "Turquoise";
    cd.lineWidth = 1;
    for(i=0; i<30; i++){
        cd.moveTo(0,0+i*20);
        cd.lineTo(anchura, 0+i*20);
    }
    for(i=0; i<50; i++){
        cd.moveTo(0+i*20,0);
        cd.lineTo(0+i*20,altura);
    }
    cd.stroke();
    cd.beginPath();
    cd.strokeStyle = "Black";
    cd.lineWidth = 2;
    cd.moveTo(anchura/2, 0);
    cd.lineTo(anchura/2, altura);
    cd.moveTo(0, altura/2);
    cd.lineTo(anchura, altura/2);
    cd.stroke();
}
function dibujarlineaspqñas()
{
    cd.beginPath();
    cd.strokeStyle = "black";
    cd.lineWidth = 1;   
    for(i=0; i<=altura; i++){
        cd.moveTo(anchura/2-10,i*20);
        cd.lineTo(anchura/2+10,i*20);
    }
    for(i=0; i<=anchura; i++){
     
        cd.moveTo(i*20,altura/2-10);
        cd.lineTo(i*20,altura/2+10);
    }
    cd.stroke();
}
function dibujarnumeros()
{
    cd.beginPath();
    cd.font = "10px serif";

    for(i=0; i<altura/2; i++){
        cd.strokeText(i-15,anchura/2-10,altura-i*20);
    }
    for(i=0; i<anchura/2; i++){
        cd.strokeText((i-22)*-1,anchura-i*20,altura/2+10);
    }
}
function calcular2(a, b, c, x1, x2, arr){
	arr[0] = (c-a*x1)/b;
	arr[1] = (c-a*x2)/b; 	
}
function calcular3(d,e,f,x3,x4,arr2){
	arr2[0] = (f-d*x3)/e;
	arr2[1] = (f-d*x4)/e; 
}
function s2el(a, b, c, d, e, f, arrxy){
	arrxy[1] = (a*f-d*c) / (a*e-d*b);    // valor de y
	arrxy[0] = (c-b*arrxy[1]) / a; 	// valor de x
}
function dibujarlineaazul(a,b,c,x1, x2, arr)
{
    cd.strokeStyle = "blue";
    cd.beginPath();
    cd.moveTo(x1*20+anchura/2, -1*(arr[0]*20-altura/2));
    cd.lineTo(x2*20+anchura/2, -1*(arr[1]*20-altura/2));
    cd.closePath();
    cd.stroke();
    cd.fillStyle = "Black";
    cd.fillText(("("+a+"x"+"+"+b+"y"+"="+c+")"),x2*20+anchura/2+10, -1*(arr[1]*20-altura/2));
}
function dibujarlineaverde(d,e,f,x3, x4, arr2)
{
    cd.strokeStyle = "green";
    cd.beginPath();
    cd.moveTo(x3*20+anchura/2, -1*(arr2[0]*20-altura/2));
    cd.lineTo(x4*20+anchura/2, -1*(arr2[1]*20-altura/2));
    cd.closePath();
    cd.stroke();
    cd.fillStyle = "Black";
    cd.fillText(("("+d+"x"+"+"+e+"y"+"="+f+")"),x4*20+anchura/2+10,-1*(arr2[1]*20-altura/2));
}
function dibujarinterseccion(arrxy)
{
    cd.strokeStyle = "red";
    cd.beginPath();
    cd.fillStyle = "red";
    cd.fillText(("("+arrxy[0] +","+ arrxy[1]+")"),arrxy[0]*20+anchura/2+10,-1*(arrxy[1]*20-altura/2));
    cd.arc(arrxy[0]*20+anchura/2,-1*(arrxy[1]*20-altura/2),4,0,2 * Math.PI);
    cd.fillStyle = "red";
    cd.fill();
    cd.closePath();
    cd.stroke();
}

