/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/

function mostrar()
{
  let nombre;
  let tipoCursada;
  let cantMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let respuesta;
  let flagMejorPromedio = 1;
  let notaMejorPromedio;
  let nombreMejorPromedio;
  let flagMasJoven = 1;
  let edadMasJoven;
  let nombreMasJoven;
  let contM = 0;
  let contH = 0;
  let contNB = 0;
  let acumNotaM = 0;
  let acumNotaH = 0;
  let acumNotaNB = 0;
  let promedioM;
  let promedioH;
  let promedioNB;
  let flagMaterias = 1;
  let edadMaterias;
  let nombreMaterias;
  let masMaterias;
 

  do{
    nombre = prompt("Ingrese nombre: ");

    tipoCursada = prompt("Ingrese tipo de cursada (libre, presencial, remota): ").toLowerCase();
    while(!(tipoCursada == "libre" || tipoCursada == "presencial" || tipoCursada == "remota")){
      tipoCursada = prompt("Error. Reingrese tipo de cursada (libre, presencial, remota): ").toLowerCase();
    }

    cantMaterias= parseInt(prompt("Ingrese cantidad de materias (más de una y menos de ocho): "));
    while(isNaN(cantMaterias) || cantMaterias < 1 || cantMaterias >= 8){
      cantMaterias= parseInt(prompt("Error. Reingrese cantidad de materias (más de una y menos de ocho): "));
    }

    sexo = prompt("Ingrese sexo (femenino/masculino/no binario): ").toLowerCase();
    while(!(sexo == "femenino" || sexo == "masculino" || sexo == "no binario")){
      sexo = prompt("Error. Reingrese sexo (femenino/masculino/no binario): ").toLowerCase();
    }

    notaPromedio = parseInt(prompt("Ingrese nota promedio (entre 1 y 10): "));
    while(isNaN(notaPromedio) || notaPromedio < 1 || notaPromedio > 10){
      notaPromedio = parseInt(prompt("Error. Reingrese nota promedio (entre 1 y 10): "));
    }

    edad = parseInt(prompt("Ingrese su edad: "));
    while(isNaN(edad)){
      edad = parseInt(prompt("Error. Reingrese su edad: "));
    }
    
    respuesta = prompt("Quiere seguir ingresando usuarios?(s/n): ");

    if(sexo != 0){
      if(flagMejorPromedio || notaPromedio > notaMejorPromedio){
        notaMejorPromedio = notaPromedio;
        nombreMejorPromedio = nombre;
        flagMejorPromedio = 0;
      }
    }

    if(tipoCursada == "libre"){
      if(flagMasJoven || edad < edadMasJoven){
        edadMasJoven = edad;
        nombreMasJoven = nombre;
        flagMasJoven = 0;
      }
    }

    switch(sexo){
      case "femenino":
        contM++;
        acumNotaM += notaPromedio;
      break;
      case "masculino":
        contH++;
        acumNotaH += notaPromedio;
      break;
      case "no binario":
        contNB++;
        acumNotaNB += notaPromedio;
      break;
    }

    if(tipoCursada == "libre" || tipoCursada == "presencial"){
      if(flagMaterias || cantMaterias > masMaterias){
        nombreMaterias = nombre;
        masMaterias = cantMaterias;
        edadMaterias = edad;
        flagMaterias = 0;
      }
    }


  }while(respuesta == "s");


  //mejor promedio no hombre
  if(flagMejorPromedio == 1){
    console.log("No hubo mejor promedio que cumpla con la condición");
  }
  else{
    console.log("El mejor promedio es: " + nombreMejorPromedio + " su nota es: " + notaMejorPromedio);
  }

  //más joven y libre
  if(flagMasJoven == 1){
    console.log("No hubo libres");
  }
  else{
    console.log("El nombre del más joven con tipo de cursada libre es: " + nombreMasJoven + " y su edad es: " + edadMasJoven);
  }

  //Promedios por sexo
  if(contM == 0){
    promedioM = "no se ingresaron alumnas.";
  }
  else{
    promedioM = acumNotaM / contM;
  }

  if(contH == 0){
    promedioH = "no se ingresaron alumnos hombres.";
  }
  else{
    promedioH = acumNotaH / contH;
  }

  if(contNB == 0){
    promedioNB = "no se ingresaron alumnes.";
  }
  else{
    promedioNB = acumNotaNB / contNB;
  }

  console.log("El promedio de nota de las mujeres es de: " + promedioM + " El de los hombres: " + promedioH + " El de no binarios es de: " + promedioNB);

  if(flagMaterias == 1){
    console.log("No hay alumnos que no cursen remoto");
  }
  else{
    console.log("El nombre de quien más materias cursa en forma no remota es: " + nombreMaterias + " su edad es " + edadMaterias + " y la cantidad de materias que cursa es: " + masMaterias);
  }

}
