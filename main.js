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
    class Usuario {
        constructor(nombre, cuenta) {
            this.nombre = nombre;
            this.cuenta = cuenta;
        }
    }
    
    const usuario1 = new Usuario ("Dalila", 1111);
    const usuario2 = new Usuario ("Pablo", 2222);
    const usuario3 = new Usuario ("Paulo", 3333);
    const usuario4 = new Usuario ("Diego", 4444);
    
    const arrayUsuario = [];
    
    arrayUsuario.push(usuario1);
    arrayUsuario.push(usuario2);
    arrayUsuario.push(usuario3);
    arrayUsuario.push(usuario4);
    
    console.log(arrayUsuario);
    
    
    function menu() {
        alert("Bienvenidos a nuestra aula virtual ")
        let opcion = parseInt(prompt("Ingrese una opcion: \n\ 1) Crear cuenta de usuario \n\ 2) Dar de baja cuenta de usuario \n\ 3) Modificacion de datos \n\ 4) Consulta sobre fechas de recuperatorio \n\ 5) Salir"));
        return opcion;
    } 
    
    
    function crearUsuario() {
        let nombre = prompt("Elija su nombre de Usuario: ");
        let cuenta = parseInt(prompt("Elija un numero de cuenta: "));
        let usuario = new Usuario (nombre, cuenta);
        arrayUsuario.push(usuario);
        console.log(arrayUsuario);
    }
    
    
    function bajaUsuario() {
        let cuenta = parseInt(prompt("Ingrese el numero de cuenta al que quiere dar de baja: "));
        let usuario = arrayUsuario.find(usuario => usuario.cuenta === cuenta);
        let indice = arrayUsuario.indexOf(usuario);
        arrayUsuario.splice(indice, 1);
        console.log(arrayUsuario);
        alert("usuario eliminado!")
    }
    
    function modificacionDatos(){
            let cuenta = parseInt(prompt("Ingrese su numero de cuenta actual: "));
            let usuario = arrayUsuario.find(usuario => usuario.cuenta === cuenta);
            let indice = arrayUsuario.indexOf(usuario);
            let nombre = prompt("Ingrese su nuevo nombre de usuario: ");
            let usuarioModificado = new usuario(nombre, cuenta);
            arrayUsuario.splice(indice, 1, usuarioModificado);
            console.log(arrayUsuario);
        }
    
    function consultaFecha(){
           const numeros = [17, 5, 29, 16, 7];
           numeros.sort((a,b) => a - b)
           console.log("Las fechas de recuperatorio se realizarán el mes de abril a las 14hs y los dias son: ")
           console.log(numeros);
        }
    
    function Salir () {
        alert("Gracias, vuelva pronto!")
    }
    
    
    let opcion = menu ()
    switch (opcion) {
        case 1:
            crearUsuario();
            break;
        case 2:
            bajaUsuario();
            break;
        case 3:
            modificacionDatos();
            break;
        case 4: 
            consultaFecha();
            break;
        case 5:
            Salir();
            break;
        default:
            alert("Opcion incorrecta!")
            break;
    }