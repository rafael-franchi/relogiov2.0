const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getUTCDate();
    let m = dateToday.getUTCMonth();
    let a = dateToday.getUTCFullYear();
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    dia.textContent = d;
    mes.textContent = m+1;
    ano.textContent = a;
    


})
