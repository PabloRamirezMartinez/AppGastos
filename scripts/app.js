// Iniciadores
var saldo = document.getElementById("saldo").value;

document.getElementById("saldoRestante").innerHTML = "$"+ 0;

//selectores


const listaTarjeta =document.getElementById("lista");

const btnGasto = document.getElementById("crearGasto");

const btnGuardar = document.getElementById("guardar");
//event listeners

btnGuardar.addEventListener("click",modificarTexto);

btnGasto.addEventListener("click",crearTarjeta)



//funciones

function modificarTexto() {

    let saldo = document.getElementById("saldo").value;
    document.getElementById("saldoRestante").innerHTML = "$" + saldo;
}

function crearTarjeta() {
// inicializar variables
let prioridad = document.getElementById("prioridad").value;
console.log(prioridad);
let color = ""
// con la funcion switch, le asignamos un color a nuestra variable color, dependiendo de la seleccion del usuario.
switch(prioridad){
    case "1" : 
        color = "#e5ffcc"
    break;

    case "2" : 
        color = "#d9f7ff"
    break;

    case "3" : 
        color = "#ffe8e8"
    break;

  
}
console.log(color);

// asignamos la variable restante al elemento interno html de saldoRestante h1.
let restante = document.getElementById("saldoRestante").innerHTML;
//con el método substring, eliminamos el primer caracter, el signo $ y lo asignamos a la variable rest.
let rest = restante.substring(1);
let monto = document.getElementById("monto").value;
let fecha = document.getElementById("fecha").value;
var item = document.getElementById("item").value;
//crear div
const divTarjeta = document.createElement("div");
divTarjeta.classList.add("tarjeta");
// agregar Li con el Item
const itmTarjeta = document.createElement("li");
itmTarjeta.classList.add("itemTarjeta")
itmTarjeta.innerText = item;
divTarjeta.appendChild(itmTarjeta);
//Agregar Li con el Monto
const mntTarjeta = document.createElement("li");
mntTarjeta.classList.add("montoTarjeta")
mntTarjeta.innerText = "$"+ monto;
divTarjeta.appendChild(mntTarjeta);
//agregar li con la fecha
const fchTarjeta = document.createElement("li");
fchTarjeta.classList.add("fechaTarjeta")
fchTarjeta.innerText = fecha;
divTarjeta.appendChild(fchTarjeta);

// Realizamos la resta del monto de la tarjeta al saldo actual.
//en n1 pasamos rest de string a int, lo mismo con n2.
n1 = parseInt(rest);
n2 = parseInt(monto);
n3 = n1 - n2;
//al final, añadimos n3 a la string de saldoRestante convirtiendola con el método toString().
document.getElementById("saldoRestante").innerHTML = "$" + n3.toString();


//añadir a lista
divTarjeta.style.backgroundColor = color ;
listaTarjeta.appendChild(divTarjeta);



}

