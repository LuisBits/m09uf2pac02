$(document).ready(function () {
    
    // 1.2 + 1.3 Mostrar ocultar con clicks. 
    $("div#cabecera").click(function () {
        $("#header").toggle();
    });
    
    $("div#menu").click(function () {
        $("#sidebar").toggle();
    });
    
    $("div#cuerpo").click(function () {
        $("#main").toggle();
    });
    
    // 1.4 Los divs desaparecen de forma gradual y mostramos texto en footer.
    $("div#finalizar").click(function () {
        $("div#cabecera").fadeOut(800);
        $("div#menu").delay(1000);
        $("div#menu").fadeOut(800);
        $("div#cuerpo").delay(2000);
        $("div#cuerpo").fadeOut(800);
        $("div#finalizar").delay(3000);
        $("div#finalizar").fadeOut(800, function() {
            $("#footer").text("Aquí va el nuevo pie de página");
        });        
    });
    

});