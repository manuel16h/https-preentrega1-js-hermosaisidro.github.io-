//Isidro Manuel Hermosa
/*Cotizador de seguro. Dependiendo de la eleccion de una de las tres opciones de categoria y el año de 
fabricacion del vehiculo, el programa devuelve el valor de la cuota*/

// Creacion de variables
let auto;
let modelo;
let año;

alert("Bienvenidos al mejor seguro del pais");

let nombre = prompt("Para comenzar, ingrese su nombre y apellido");

if (nombre != "") {
    const tipoDeSeguro = prompt(`¿Que tipo de seguro buscas ${nombre}? \n Ingrese un numero: \n 1-Seguro Basico \n 2-Seguro Total \n 3-Seguro Premiun`);


    switch (tipoDeSeguro) {

        case "1":

            auto = prompt("Ingrese la marca del vehiculo");
            modelo = prompt("Ingrese el modelo del vehiculo");
            año = prompt("Ingrese el año de fabricacion, valores permitidos 2000 al 2023");

            //alerta valor erroneo

            if ((auto == "") || (modelo = "") || (año == "")) {
                alert("Ingrese valores validos. Intente de nuevo");
            }

            //enviar a la funcion

            calcular(tipoDeSeguro, año);

            break;


        case "2":

            auto = prompt("Ingrese la marca del vehiculo");
            modelo = prompt("Ingrese el modelo del vehiculo");
            año = prompt("Ingrese el año de fabricacion, valores permitidos 2000 al 2023");

            //alerta valor erroneo
            if ((auto == "") || (modelo = "") || (año == "")) {
                alert("Ingrese valores validos. Intente de nuevo");
            }

            //enviar a la funcion

            calcular(tipoDeSeguro, año);

            break;

        case "3":

            auto = prompt("Ingrese la marca del vehiculo");
            modelo = prompt("Ingrese el modelo del vehiculo");
            año = prompt("Ingrese el año de fabricacion, valores permitidos 2000 al 2023");

            //alerta valor erroneo
            if ((auto == "") || (modelo = "") || (año == "")) {
                alert("Ingrese valores validos. Intente de nuevo");
            }

            //enviar a la funcion

            calcular(tipoDeSeguro, año);

            break;
    }
}

else {
    alert("Ingrese su nombre")
}

//Funcion 

function calcular(tipo, año) {

    //opcion 1 del seguro
    if ((año >= 2021) && (año <= 2023)) {
        if ((año >= 2021) && (año <= 2023)) {

            alert(`${nombre}, su cuota mensual de su vehiculo es $10.000`)
        }

        else if ((año >= 2011) && (año <= 2020)) {

            alert(`${nombre}, su cuota mensual de su vehiculo es $15.000`)
        }

        else {
            alert(`${nombre}, su cuota mensual de su vehiculo es $20.000`)
        }
    }

    //opcion 2 del seguro
    else if (tipo == "2") {
        if ((año >= 2000) && (año <= 2010)) {

            alert(`${nombre}, su cuota mensual de su vehiculo es $6.000`)
        }

        else if ((año >= 2011) && (año <= 2020)) {

            alert(`${nombre}, su cuota mensual de su vehiculo es $8.000`)
        }

        else if ((año >= 2021) && (año <= 2023)) {
            alert(`${nombre}, su cuota mensual de su vehiculo es $10.000`)
        }
    }

    //opcion 3 del seguro
    else if (tipo == "1") {
        if ((año >= 2000) && (año <= 2010)) {

            alert(`${nombre}, su cuota mensual de su vehiculo es $4.000`)
        }

        else if ((año >= 2011) && (año <= 2020)) {

            alert(`${nombre}, su cuota mensual de su vehiculo es $5.000`)
        }

        else if ((año >= 2021) && (año <= 2023)) {
            alert(`${nombre}, su cuota mensual de su vehiculo es $6.000`)
        }
    }

}