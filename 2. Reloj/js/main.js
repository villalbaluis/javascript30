const manija_hora = document.querySelector(".hora-manija");
const manija_min = document.querySelector(".min-manija");
const manija_segundos = document.querySelector(".seg-manija");

function obtenerHora() {
    const fecha = new Date();

    const segundos = fecha.getSeconds();
    const segundos_grados = ((segundos / 60) * 360) + 90;
    manija_segundos.style.transform = `rotate(${segundos_grados}deg)`;

    const minutos = fecha.getMinutes();
    const minutos_grados = ((minutos / 60) * 360) + 90;
    manija_min.style.transform = `rotate(${minutos_grados}deg)`;

    const horas = fecha.getHours();
    const horas_grados = ((horas / 12) * 360) + 90;
    manija_hora.style.transform = `rotate(${horas_grados}deg)`;

    console.log(`Hora: ${horas}, Min: ${minutos}, Seg: ${segundos}`);

};

setInterval(obtenerHora, 1000)