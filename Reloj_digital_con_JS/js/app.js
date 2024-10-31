
function showreloj () {
    let date = new Date();
    let hr = formhours(date.getHours());
    let min = formhours(date.getMinutes());
    let sec = formhours(date.getSeconds());
    document.getElementById('hours').innerHTML = `${hr}:${min}:${sec}`;

    const mounth = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = days[date.getDay()];
    let dia = date.getDate();
    let mes = mounth[date.getMonth()];
    let fechaText = `${diaSemana}|${dia}|${mes}`;
    document.getElementById('date').innerHTML = fechaText;
    document.getElementById('contenedor').classList.toggle('animar');

}

function formhours (hours){
    if(hours < 10){
        hours = '0' + hours;
    }
    return hours;
}

setInterval(showreloj,1000);