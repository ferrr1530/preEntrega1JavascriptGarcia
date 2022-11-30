let nombreAlumno = parseInt(prompt("ingrese su nombre:"));
let materia = parseInt(prompt("ingrese el nombre de la materia a consultar:"));
let primeraNota = parseInt(prompt("nota de su primer parcial"));
let segundaaNota = parseInt(prompt("nota de su segundo parcial"));
let notaFinal = parseInt(prompt("nota de final"));
let promedio = (primeraNota + segundaaNota + notaFinal) / 3;{
console.log("su promedio final es de :");
}
    if (promedio < 7){
        alert("has reprobado, por favor ingresa tu usuario para ver las fechas de tu recuperatorio");
    }



let usuario = (prompt("ingrese su nombre de usuario: (para salir ingrese: salir)"));
while (usuario != "salir"){
    console.log(usuario);
    usuario= prompt("ingrese su usuario: (para salir ingrese: salir)");
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