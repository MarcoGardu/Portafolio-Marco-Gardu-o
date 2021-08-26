$(document).ready(function(){                
                                
    if($(window).width() > 800){
        $('.banner .banner-content').css({
            opacity: 0,
            marginTop: -200
        });

        $('.banner .banner-content').animate({
            opacity: 1,
            marginTop: '0px'
        },1500);
    }

    //Scroll para los elementos
    var acercaDe    =   $('#acerca').offset().top;
    $('#btn-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:acercaDe - 150
        },2000);
    });

    
    var proyectos = $('#proyectos').offset().top;
    $('#btn-proyectos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: proyectos - 100
        },2000);
    });
    var conocimientos = $('#conocimientos').offset().top;
    $('#btn-conocimientos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: conocimientos - 25
        },2000);
    });
    var contacto = $('#contacto').offset().top;
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:contacto
        },2000);
    });                        
    var inicio = $('#banner').offset().top;
    $('#btn-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        },2000);
    });                            
});