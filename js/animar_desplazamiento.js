$(document).ready(function(){                
                                
    if($(window).width() > 800){
        $('.banner .banner-content').css({
            opacity: 0,
            marginTop: -200
        });

        $('.banner .banner-content').animate({
            opacity: 1,
            marginTop: '0px'
        },500);
    }

    //Scroll para los elementos
    var acercaDe = $('#acerca').offset().top;
    $('#btn-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:acercaDe - 150
        },500);
    });

    
    var proyectos = $('#proyectos').offset().top;
    $('#btn-proyectos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: proyectos - 100
        },500);
    });
    var conocimientos = $('#conocimientos').offset().top;
    $('#btn-conocimientos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: conocimientos - 25
        },500);
    });
    var contacto = $('#contacto').offset().top;
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:contacto
        },500);
    });
    var contacto2 = $('#contacto').offset().top;
    $('#boton-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:contacto2
        },0);
    });
    
    var inicio = $('#banner').offset().top;
    $('#btn-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        },500);
    });                            
});