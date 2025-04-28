let mensaje = document.getElementById('Resultado') // mensaje con el resultado => id="Resultado"
let mensajeEstado = document.getElementById('estado') // estado de acuerdo al indicador => id="estado"
let modal = document.getElementById('ventanaModal') // Referencia para nuestra ventana modal => id="ventanaModal"

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    let pesoIngresado = document.getElementById('Peso').value // Entrada de peso kg
    let alturaIngresada = document.getElementById('Altura').value // Entrada de altura metros
    let calcular = eval(pesoIngresado / (alturaIngresada * alturaIngresada))
    mensaje.textContent = calcular.toFixed(1) //digitos para los decimales aceptados
    mensaje.style.color = 'orangered'
    if (calcular === 0 || isNaN(calcular)) {
        mensaje.textContent = 0
        mensajeEstado.textContent = ''
        modal.style.display = 'block'
    } else if (calcular <= 18.4) {
        mensajeEstado.textContent = 'Peso bajo'
        mensajeEstado.style.color = '#b3ccff'
    } else if (calcular >= 18.5 && calcular <= 25.0) {
        mensajeEstado.textContent = 'Normal'
        mensajeEstado.style.color = '#ccffc4'
    } else if (calcular >= 25.1) {
        mensajeEstado.textContent = 'Sobrepeso'
        mensajeEstado.style.color = '#ffc0c0'
    }

    // if (!pesoIngresado.textContent && !alturaIngresada.textContent) {
    //     document.getElementById('formulario').reset(); // Limpiar los campos del form
    // }

});

/* Modal => Permitir mostrar la recomendación y desaparecer cuando se toca cualquier parte de la pantalla */
window.addEventListener("click", function () {
    modal.style.display = "none";
});



