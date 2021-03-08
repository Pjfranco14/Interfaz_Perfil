
var btn_destacados = document.getElementById('destacados');
var btn_proyectos = document.getElementById('proyectos');
var btn_biografia = document.getElementById('biografia');


var caja_destacados = document.getElementById('cont_destacados');
var caja_proyectos = document.getElementById('cont_proyectos');
var caja_biografia = document.getElementById('cont_biografia');

function index(){
    caja_destacados.classList.add('activarCaja');
    
}
index();

btn_destacados.addEventListener('click', function(){
    caja_destacados.classList.add('activarCaja');
    caja_proyectos.classList.remove('activarCaja');
    caja_biografia.classList.remove('activarCaja');
    
});

btn_proyectos.addEventListener('click', function(){
    caja_proyectos.classList.add('activarCaja');
    caja_destacados.classList.remove('activarCaja');
    caja_biografia.classList.remove('activarCaja');
    
});

btn_biografia.addEventListener('click', function(){
    caja_biografia.classList.add('activarCaja');
    caja_destacados.classList.remove('activarCaja');
    caja_proyectos.classList.remove('activarCaja');
    
});


