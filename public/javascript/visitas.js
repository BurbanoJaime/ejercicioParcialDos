function actualizarVisitas (){
    document.querySelector('.visitas').innerHTML = arreglo.length;
}

var arreglo = JSON.parse(localStorage.getItem('arreglo'));
if(arreglo == null) arreglo = [];

actualizarVisitas();
