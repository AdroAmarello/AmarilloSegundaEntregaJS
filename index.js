
// let cantAlumnosXclase= 0;
// let clasesTomadas    = 0;
let valorPaseXuna    = 800;
let valorPaseXcuatro = 3000;
let valorPaseXocho   = 5600;
const listaAlumnos = [];

class Alumno {
    constructor(nombreAlumno, apellidoAlumno, tipoDePase, clasesTomadas) {
        this.nombreAlumno   = nombreAlumno;
        this.apellidoAlumno = apellidoAlumno;
        this.tipoDePase     = tipoDePase;
        this.clasesTomadas  = clasesTomadas;
    }
}

function crearAlumno () {
    let nombreAlumno = prompt("Ingrese el nombre del Alumno:");
    let apellidoAlumno = prompt("Ingrese el apellido del Alumno");
    let tipoDePase = Number(prompt("Ingrese qué pase adquirió (1-Clase Suelta, 2-Pack x 4, 3-Pack x 8):"));
        switch (tipoDePase) {
            case 1:
                tipoDePase = valorPaseXuna;
                break;
            case 2:
                tipoDePase = valorPaseXcuatro;
                break;
            case 3:
                tipoDePase = valorPaseXocho;
                break;
            default:
                alert("Ingrese un pase válido");
                console.log("El valor ingresado fue " + tipoDePase + " por favor recargue la página")
            break 
        }
    let clasesTomadas = 0;
    let i = 1;
    while (i <= clasesDictadas) {
        let asistencia = prompt("Estuvo "+ nombreAlumno + " presente en la clase " + i + " ?")
        if(asistencia == "si"){
            clasesTomadas = clasesTomadas + 1;
        }
        i++
    }
    let alumno = new Alumno(nombreAlumno, apellidoAlumno, tipoDePase, clasesTomadas);
    return listaAlumnos.push(alumno);
}
// recorrer cada elemento del array listaAlumnos con el forEach
// tomar la propiedad tipoDePase y verificar si el valor es 800, 3000 o 5600 
// si es 800 multiplicar por el valor de clasesTomadas y ubicarlo en la variable plataXalumno.
// si es 3000 dividir por 4 y multiplicar por el valor de clasesTomadas y ubicarlo en la variable plataXalumno.
// si es 5600 dividir por 8 y multiplicar por el valor de clasesTomadas y ubicarlo en la variable plataXalumno.
// definir una variable que va a contener la suma de la plataXalumno


let clasesDictadas = prompt("Clases dictadas este mes:");

let alumnosPresentes = Number(prompt("¿Cuántos alumnos asistieron en total?"));

for (let i = 0; i < alumnosPresentes; i++) {
    crearAlumno();
    console.log("En la posición " + i + " se encuentra el alumno " + listaAlumnos[i].nombreAlumno);
    console.log("El alumno " + listaAlumnos[i].nombreAlumno + " " + listaAlumnos[i].apellidoAlumno + " asistió a " + listaAlumnos[i].clasesTomadas + " clases");    
}

let resultadoSueldo = 0;
let plataXalumno = 0
listaAlumnos.forEach((elemento,i) => {
    console.log(elemento, "Este es el elemento en la posición "+ i);
    switch (elemento.tipoDePase) { 
        case 5600:
            plataXalumno = elemento.tipoDePase/8 * elemento.clasesTomadas;
            break;
        case 3000:
            plataXalumno = elemento.tipoDePase/4 * elemento.clasesTomadas;
            break;
        case 800:
            plataXalumno = elemento.tipoDePase* elemento.clasesTomadas;
            break;
        default:
            alert("Ingrese un pase válido");
            break;
    }
    console.log(plataXalumno,"Este es el importe correspondiente al alumno " + elemento.nombreAlumno);
    resultadoSueldo += plataXalumno;
    
});

console.log(resultadoSueldo,"este muestra el resultado acumulado");
console.log(listaAlumnos, "este es el listado de Alumnos");
console.log("Al profesor le corresponden " + resultadoSueldo + " pesos");
console.log("Fin del programa")
alert("Gracias vuelva prontos");