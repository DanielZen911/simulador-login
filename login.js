const USUARIO_CORRECTO = `admin`;
const CONTRASENA_CORRECTA = `2345`;

function verificarCredenciales(usuario, contrasena) {
    if (usuario === USUARIO_CORRECTO && contrasena === CONTRASENA_CORRECTA) {
        return true;
    } else {
        return false;
    }
}

function validarAcceso() {
    let intentos = 0;
    let accesoConcedido = false;

    while (intentos < 3 && accesoConcedido === false) {
        
        let usuarioIngresado = prompt(`Ingrese su usuario:`);
        let contrasenaIngresada = prompt(`Ingrese su contraseña:`);

        let esValido = verificarCredenciales(usuarioIngresado, contrasenaIngresada);

        if (esValido === true) {
            alert(`¡Bienvenido al sistema!`);
            accesoConcedido = true; 
        } else {
            if (intentos < 3) {
                intentos++;
                alert(`Datos incorrectos. Intento ${intentos} de 3.`);
            } else {
                alert(`Usuario bloqueado. Ha superado el número de intentos.`);
                intentos++; 
            }
        }
    }
}

validarAcceso();