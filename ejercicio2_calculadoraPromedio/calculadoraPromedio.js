
//Ejercicio 2 de Lógica de Programación 
//Elaborado por Darlyn Ludeña
// 06/01/2024


let nombre_estudiante;
let materia;
let nota1;
let nota2;
let nota3;


while (true) {
    //Se ingresa el nombre del estudiante, materia y las 3 notas
    nombre_estudiante = prompt("Ingresa el nombre del estudiante:");
    materia = prompt("Ingresa el nombre de la materia:");
    nota1=parseFloat(prompt("Ingrese el valor de la primera nota"));
    nota2=parseFloat(prompt("Ingrese el valor de la segunda nota"));
    nota3=parseFloat(prompt("Ingrese el valor de la tercera nota"));
    // Se verifica que las notas ingresadas sean distintas de nulo
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        //Se verifica que las notas estén dentro del rango de 0 a 10
        if((nota1<=10 && nota1>=0)&& (nota2<=10  && nota2>=0)   && (nota3>=0 && nota3<=10)){
            let suma_notas=nota1+nota2+nota3
            let promedio_notas=suma_notas/3
            // Se imprimen diferentes mensaje de acuerdo a si el promedio de notas es mayor o igual a 7 o menor.
            if (promedio_notas>=7){
                console.log(`${nombre_estudiante}, ¡felicidades! Has aprobado ${materia} con un promedio de ${promedio_notas}`);
                break;
            }
            else
            {
                 console.log(`${nombre_estudiante}, gracias por tu esfuerzo. Nos vemos pronto en clase de ${materia}. El promedio obtenido es ${promedio_notas}`);
                 break;
            }

        }
        else{
            alert("Por favor, ingresa valores numéricos para las notas entre 0 y 10")
        }

    }
    else{
        alert("Por favor, ingresa valores numéricos para las notas y cadenas de texto para el nombre y la materia. Llena todos los campos correctamente.")
    }

}

