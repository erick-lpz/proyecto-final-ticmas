$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegación de desplazamiento
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botón de desplazamiento hacia arriba mostrar/ocultar
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // guion deslizable
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // eliminando el desplazamiento suave al hacer clic en el botón deslizable hacia arriba
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando nuevamente desplazamiento suave en los elementos del menú
        $('html').css("scrollBehavior", "smooth");
    });

    // alternar secuencia de comandos de menú/barra de navegación
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // guión de animación de texto de escritura
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});