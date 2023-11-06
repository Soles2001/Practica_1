$(document).ready(function() {
    console.log("jQuery load");


    // Agrega una imagen (col 1) por defecto cuando la página se carga
    $("#work_img").attr("src", "media/img/origen1.jpg");

    $('._row_header .col').hover(function() {
        // Cuando haces hover en una columna
        //console.log("hover col");

        var work_number = $(this).data('work');
        //console.log("img/origen" + work_number + ".jpg");
        $("#work_img").attr("src","media/img/origen" + work_number + ".jpg");
       
    }, function() {
        //pantalla.remove();
    });

    $('._row_header .col').click(function() {
        // coger el valor del "href" correspondiente al cada "col"
        var go_work = $(this).find('a').attr('href');
        // Redirigir a nuev pagina
        window.location.href = go_work;
    });

    //¿por que cojones he hecho esto si al clikear en un "a" ya te redirige a una página? xd
    //maeima niño que retraso


});