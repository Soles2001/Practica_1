$(document).ready(function() {
    console.log("jQuery load");


    $('._row_header .col').hover(function() {
        // Cuando haces hover en una columna
        
        //console.log("hover col");
        
        var work_number = $(this).data('work');
        //console.log('Hover en col ' + work_number);
        console.log("img/origen" + work_number + ".jpg");

        $("#work_img").attr("src","media/img/origen" + work_number + ".jpg");
       
    }, function() {
        //pantalla.remove();
    });


});