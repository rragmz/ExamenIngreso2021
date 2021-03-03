/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/


function mostrar()
{
	let nombre;
	let tipo;
	let precio;
	let cantUnidades;
	let tipoInflamable;
	let marca;
	let contAlcohol = 0;
	let contIac = 0;
	let contQuat = 0;
	let acumAlcohol = 0;
	let acumIac = 0;
	let acumQuat = 0;
	let promAlcohol;
	let promIac;
	let promQuat;
	let acumTotal = 0;
	let acumIgni = 0;
	let acumComb = 0;
	let acumExpl = 0;
	let inflamableMasCant;
	let contUnidadesIac200 = 0;
	let flagCaro = 1;
	let precioCaro;
	let marcaCaro;
	let tipoCaro;
	
	for(let i = 0; i < 5; i++){
		nombre = prompt("Ingrese nombre: ");
		
		tipo= prompt("Ingrese tipo de producto (ALCOHOL/IAC/QUAT").toLowerCase();
		while(!(tipo == "alcohol" || tipo == "iac" || tipo == "quat")){
			tipo= prompt("Error. Reingrese tipo de producto (ALCOHOL/IAC/QUAT").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio (entre 100 y 300)"));
		while(isNaN(precio) || precio < 100 || precio > 300){
			precio = parseInt(prompt("Error. Reingrese el precio (entre 100 y 300)"));
		}

		cantUnidades = parseInt(prompt("Ingrese cantidad de unidades (entre 1 y 1000): "));
		while(isNaN(cantUnidades) || cantUnidades <= 0 || cantUnidades > 1000){
			cantUnidades = parseInt(prompt("Error. Reingrese cantidad de unidades (entre 1 y 1000): "));
		}

		tipoInflamable = prompt("Ingrese tipo inflamable (ignífugo/combustible/explosivo)").toLowerCase();
		while(!(tipoInflamable == "ignífugo" || tipoInflamable == "combustible" || tipoInflamable == "explosivo")){
			tipoInflamable = prompt("Error. Reingrese tipo inflamable (ignífugo/combustible/explosivo)").toLowerCase();
		}

		marca = prompt("Ingrese marca: ");

		acumTotal+=cantUnidades

		switch(tipo){
			case "alcohol":
				contAlcohol++;
				acumAlcohol += cantUnidades;

			break;
			case "iac":
				contIac++;
				acumIac += cantUnidades;
				if(precio <= 200){
					contUnidadesIac200 += cantUnidades;
				}
			break;
			case "quat":
				contQuat++;	
				acumQuat += cantUnidades;
			break;
		}

		switch(tipoInflamable){
			case "combustible":
				acumComb += cantUnidades;
			break;
			case "explosivo":
				acumExpl += cantUnidades;
			break;
			case "ignífugo":
				acumIgni += cantUnidades;
			break;
		}

		if(flagCaro || precio > precioCaro){
			precioCaro = precio;
			marcaCaro = marca;
			tipoCaro = tipo;
			flagCaro = 0;
		}
	
	}

	if(contAlcohol == 0){
		promAlcohol = "no se compraron alcoholes";
	}
	else{
		promAlcohol = acumAlcohol / contAlcohol;
	}

	if(contIac == 0){
		promQuat = "no se compraron QUAT";
	}
	else{
		promQuat = acumQuat / contQuat;
	}

	if(contIac == 0){
		promIac = "no se compraron IAC";
	}
	else{
		promIac = acumIac / contIac;
	}

	if(acumComb > acumExpl && acumComb > acumIgni){
		inflamableMasCant ="combustible";
	}
	else if(acumExpl >= acumComb && acumExpl > acumIgni){
		inflamableMasCant ="explosivo";
	}
	else{
		inflamableMasCant ="ignífugo";
	}

	console.log("El promedio de alcohol: " + promAlcohol + " el de IAC: " + promIac + " y el de Quat: " + promQuat);
	console.log("El inflamable con más cantidad es: " + inflamableMasCant);

	if(contUnidadesIac200 == 0){
		console.log("No se compraron IAC que cumplan con la condición");
	}
	else{
		console.log("La cantidad de unidades de IAC menores a $200 es de: " + contUnidadesIac200);
	}
	console.log("El tipo más caro es: " + tipoCaro + " su marca: " + marcaCaro + " y su precio: " + precioCaro);
}
