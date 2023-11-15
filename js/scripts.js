$(document).ready(function () {
    console.log("jQuery load");

    // Agrega una imagen (col 1) por defecto cuando la página se carga
    //DETECTANDO SLUG
    var currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "work.html") {
        $("#work_img").attr("src", "media/img/origen1.jpg");
    }

    //DETECTANDO NOMBRE DE PÁGINA
    //var currentPage = document.title;
    //if (currentPage === "Saguaro Studio / Work") {
    //$("#work_img").attr("src", "media/img/origen1.jpg");
    //}

    $('._row_header .col').hover(function () {
        // Cuando haces hover en una columna
        //console.log("hover col");

        var work_number = $(this).data('work');
        //console.log("img/origen" + work_number + ".jpg");
        $("#work_img").attr("src", "media/img/origen" + work_number + ".jpg");

    }, function () {
        //pantalla.remove();
    });

    $('._row_header .col').click(function () {
        // coger el valor del "href" correspondiente al cada "col"
        var go_work = $(this).find('a').attr('href');
        // Redirigir a nuev pagina
        window.location.href = go_work;
    });

    //¿por que cojones he hecho esto si al clikear en un "a" ya te redirige a una página? xd
    //maeima niño que retraso

    var _change_txt = $('#_more_to_less');
    var collapseExample = $('#collapseExample');

    collapseExample.on('hidden.bs.collapse', function () {
        _change_txt.text('more info +');
    });

    collapseExample.on('shown.bs.collapse', function () {
        _change_txt.text('less info -');
    });






    let imagenes;

    if (currentPage === "example.html") {
        imagenes = [
            "media/img/MFA1.png",
            "media/img/MFA2.png",
            "media/img/MFA3.png",
            "media/img/MFA4.png",
            "media/img/MFA5.png",
            "media/img/MFA6.png",
        ];
    }

    if (currentPage === "example2.html") {
        imagenes = [
            "media/img/Loewe1.gif",
            "media/img/Loewe2.png",
            "media/img/Loewe3.png",
            "media/img/Loewe4.png",
            "media/img/Loewe5.png",
            "media/img/Loewe6.png"
        ];
    }

    if (currentPage === "example3.html") {
        imagenes = [
            "media/img/mama1.png",
            "media/img/mama2.png",
            "media/img/mama3.png",
            "media/img/mama4.png",
            "media/img/mama5.png",
            "media/img/mama6.png"
        ];
    }

    if (currentPage === "example4.html") {
        imagenes = [
            "media/img/ar1.png",
            "media/img/ar2.png",
            "media/img/ar3.png",
            "media/img/ar4.png",
            "media/img/ar5.png",
            "media/img/ar6.png"
        ];
    }

    if (currentPage === "example5.html") {
        imagenes = [
            "media/img/g1.jpg",
            "media/img/g2.jpg",
            "media/img/g3.jpg",
            "media/img/g4.jpg",
            "media/img/g5.jpg",
            "media/img/g6.jpg",
        ];
    }

    if (currentPage === "example6.html") {
        imagenes = [
            "media/img/origen6.jpg",
            "media/img/a2.gif",
            "media/img/a3.jpg",
            "media/img/a4.jpg",
            "media/img/a5.jpg",
            "media/img/a6.jpg",
        ];
    }

    if (currentPage === "example7.html") {
        imagenes = [
            "media/img/f1.gif",
            "media/img/f2.png",
            "media/img/f3.png",
            "media/img/f4.png",
            "media/img/f5.png",
            "media/img/f6.png",
        ];
    }

    if (currentPage === "example8.html") {
        imagenes = [
            "media/img/o1.jpg",
            "media/img/o2.jpg",
            "media/img/o3.jpg",
            "media/img/o4.jpg",
            "media/img/o5.jpg",
            "media/img/o6.jpg",
        ];
    }

    if (currentPage === "example9.html") {
        imagenes = [
            "media/img/origen9.jpg",
            "media/img/m1.jpg",
            "media/img/m2.jpg",
            "media/img/m3.jpg",
            "media/img/m4.jpg",
            "media/img/m5.jpg",
        ];
    }

    if (currentPage === "example10.html") {
        imagenes = [
            "media/img/origen10.jpg",
            "media/img/t2.jpg",
            "media/img/t3.jpg",
            "media/img/t4.jpg",
            "media/img/t5.jpg",
            "media/img/t6.jpg",
        ];
    }

    if (currentPage === "example.html" || currentPage === "example2.html" || currentPage === "example3.html" || currentPage === "example4.html" || currentPage === "example5.html" || currentPage === "example6.html" || currentPage === "example7.html" || currentPage === "example8.html" || currentPage === "example9.html" || currentPage === "example10.html") {

        //GUARDAMOS LA IMAGEN A REMPLAZAR (ID) EN UN VARIABLE
        var $imgElement = $("#work_img");
        //se crea la variable currentImageIndex en 0 (esta seguira la posicion del array que se muestra)
        let currentImageIndex = 0;
        //se añade la vaibale intervalId sin valor para mas tarde asignar un intervalo
        let intervalId;

        //se define una funcion para cambiar la imagen
        function changeImage() {
            //cambia el src de la imagen por el de la imagen del array en la posicion actual de "currentImageIndex"
            $imgElement.attr("src", imagenes[currentImageIndex]);
            //una vez cambia se suma una posición para que avance la posición del array. 
            //el operador "% images.length" asegura que nunca sea la posición del "current" mayor a los contenidos del array reseteandolo a 0
            //al llegar a 5 y sumar 1 el indice se convierte en 0.
            currentImageIndex = (currentImageIndex + 1) % imagenes.length;
        }

        //se guarda la posicion del div que contiene la imagen a cambiar para detectar el hover en esta y ativar un función
        var $jpgContainer = $("._hover_carrousel");
        $jpgContainer.on("mouseenter", function () {
            //se incia la funcion para el cambio de imagen.
            changeImage();
            intervalId = setInterval(changeImage, 150); // se setea el intervalo entre imageen de la variable interval a 150ms
        });

        $jpgContainer.on("mouseleave", function () {
            // Detener el cambio de imágenes al dejar de hacer hover en el contenedor
            clearInterval(intervalId); //se resetea el intervalo
            $imgElement.attr("src", imagenes[0]); //la imagen incial se resetea a la primera del array
        });

        // Iniciar con la imagen inicial
        $imgElement.attr("src", imagenes[0]);
    }




    //NO ESTA HECHO
    var modoNocheActivo = false;
    $("#_cambio_color").click(function () {
        modoNocheActivo = !modoNocheActivo;

        if (modoNocheActivo) {
            // Cambiar a modo noche

        } else {
            // Cambiar a modo día

        }
    });

    //ESTE SCRIPT ES PARA WORKS (EXTERIOR) PARA EL CHEVRON EN EL COLLAPSE/TOGGLE
    $('#collapseExample').on('show.bs.collapse', function() {
        $('.fas.fa-chevron-up').css('transform', 'rotate(180deg)').css('transition', 'transform 0.3s ease');
      });
  
      $('#collapseExample').on('hide.bs.collapse', function() {
        $('.fas.fa-chevron-up').css('transform', 'rotate(0deg)').css('transition', 'transform 0.3s ease');
    });


    //SOLO PERMITE UN COLLAPSE ABIERTO EN LA SECCIÓN DE WORKS
    
    $('.collapse').on('show.bs.collapse', function () {
        $('.collapse.show').not(this).collapse('hide');
    });

});

