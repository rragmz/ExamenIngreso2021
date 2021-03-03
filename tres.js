/*Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temp;
	let sexo;
	let precio = 600;
	let respuesta;
	let contViudosMas60 = 0;
	let flagJovenSoltera = 1;
	let nombreJovenSoltera;
	let edadJovenSoltera;
	let contPasajeros = 0;
	let totalBruto;
	let precioDescuento;
	let contMayores60 = 0;


	do{
		nombre = prompt("Ingrese su nombre: ");

		estadoCivil = prompt("Estado civil (soltero/casado/viudo): ").toLowerCase();
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")){
			estadoCivil = prompt("Error. Reingrese Estado civil (soltero/casado/viudo): ").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese su edad: "));
		while(isNaN(edad) || edad <= 17){
			edad = parseInt(prompt("Error. Reingrese su edad: "));
		}

		temp = parseFloat(prompt("Ingrese su temperatura: "));
		while(isNaN(temp) || temp < 30 || temp > 45){
			temp = parseFloat(prompt("Error. Reingrese su temperatura: "));
		}

		sexo = prompt("Ingrese su sexo (f/m/nb): ");
		while(!(sexo == "f" || sexo == "m" || sexo == "nb")){
			sexo = prompt("Error. Reingrese su sexo (f/m/nb): ");
		}

		if(estadoCivil == "viudo" && edad > 60){
			contViudosMas60++;
		}

		if(sexo == "f" && estadoCivil == "soltero"){
			if(flagJovenSoltera || edad < edadJovenSoltera){
				edadJovenSoltera = edad;
				nombreJovenSoltera = nombre;
				flagJovenSoltera = 0;
			}
		}

		if(edad > 60){
			contMayores60++;
		}

		contPasajeros++;

		respuesta= prompt("Desea ingresar más pasajeros? (s/n): ");
	}while(respuesta == "s");

	
	totalBruto = contPasajeros * precio;

	//viudos +60
	if(contViudosMas60 == 0){
		console.log("No hay viudos +60.");
	}
	else{
		console.log("La cantidad de viudos mayores de 60 años es de: " + contViudosMas60);
	}

	//joven soltera
	if(flagJovenSoltera== 1){
		console.log("no se ingresaron mujeres solteras");
	}
	else{
		console.log("La mujer más joven y soltera es: " + nombreJovenSoltera + " y su edad es: " + edadJovenSoltera);
	}

	//precio bruto
	console.log("El precio total es de: " + totalBruto);

	//precio descuento

	if(contMayores60 >= (contPasajeros/2)){
		precioDescuento = totalBruto - (totalBruto *0.25);
		console.log("El precio con descuento es de: " + precioDescuento);
	} 
	else{
		console.log("No corresponde descuento.");
	}


}
