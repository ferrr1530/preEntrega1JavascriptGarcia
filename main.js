let nombreAlumno = (prompt("ingrese su nombre:"));
function saludarAlumno (nombreAlumno){
    alert("hola " + nombreAlumno);
}
saludarAlumno(nombreAlumno);
let materia = (prompt("ingrese el nombre de la materia a consultar:"));
let primeraNota = parseInt(prompt("nota de su primer parcial"));
let segundaNota = parseInt(prompt("nota de su segundo parcial"));
let notaFinal = parseInt(prompt("nota de tu final"));

function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let promedioFinal = calcularPromedio(primeraNota, segundaNota, notaFinal);

console.log("su promedio final es de :" + promedioFinal);

if (promedioFinal < 7){
        alert("has reprobado, por favor ingresa tu usuario para ver las fechas de tu recuperatorio");
}else {
    alert("felicitaciones, estás aprobado");
}
let usuario = prompt("ingrese su usuario: (luego de escribir el nombre de usuario ingrese: salir)");
while (usuario != "salir"){
    console.log(usuario);
    usuario= prompt("ingrese su usuario: (luego de escribir el nombre de usuario ingrese: salir)");
}
let contraseniaUsuario = parseInt(prompt("ingrese su contraseña del aula virtual;"));
const contraseniaDelUsuario = 1234;
for(let i = 0; i < 2; i ++){
    if (contraseniaUsuario === contraseniaDelUsuario){
        console.log("contraseña válida");
        break;
    }
    else contraseniaUsuario = parseInt(prompt("contraseña inválida, vuelve a intentarlo"));
    }