// Fecha del evento
const fechaEvento = new Date("Dec 20, 2024 00:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    // Calculos de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar resultado
    document.getElementById("contador").innerText = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Si ya pasó el evento
    if (diferencia < 0) {
        document.getElementById("contador").innerText = "¡El evento ya pasó!";
    }
}

// Actualizar contador cada segundo
setInterval(actualizarContador, 1000);
