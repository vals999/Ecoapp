$(document).ready(function() {
    // Al hacer clic en un enlace de la navbar
    $('nav a').click(function(e) {
      e.preventDefault(); // Prevenir comportamiento predeterminado
  
      // Obtener la sección a la que se dirige el enlace
      var section = $(this).attr('href');
      
      // Desactivar la clase active en todos los enlaces
      $('nav a').removeClass('active');
      
      // Agregar la clase active al enlace correspondiente a la sección actual
      $(this).addClass('active');
      
      // Desplazarse a la sección correspondiente
      $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 1000);
    });
  });
  