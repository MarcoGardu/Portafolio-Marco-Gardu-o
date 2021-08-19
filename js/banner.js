let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let sun = document.getElementById("sun");
let rocks = document.getElementById("rocks");
let water = document.getElementById("water");
let principal = document.getElementById("texo-principal");
let secundaio = document.getElementById("texto-secundario");
let boton = document.getElementById("boton-contacto");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    bird1.style.left = value * 0.88 + 'px';
    bird1.style.top = value * 0.88 + 'px';
    bird2.style.left = -value * 0.8 + 'px';
    bird2.style.top = value * 0.8 + 'px';
    sun.style.top = value * 1 + 'px';
    
    rocks.style.top = -value * 0.15 + 'px';

    principal.style.top = (value * 0.5) - 100+ 'px';
    secundaio.style.top = (value * 0.5) - 90+ 'px';
    boton.style.top = (value * 0.5) -50 + 'px';
})