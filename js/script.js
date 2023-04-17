// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
      if (form.checkValidity()) {
        mostrarDatos()
      }

    }, false)
  })
})()

function mostrarDatos() {
    // Obtener valores de los campos del formulario
    var nombre = document.getElementById("nameId").value;
    var apellido = document.getElementById("surnameId").value;
    var correo = document.getElementById("emailId").value;
    var comentario = document.getElementById("textAreaId").value;
  
    // Crear una nueva página HTML con el titulo "Datos ingresados"
    var nuevaPagina = window.open("");
    
    // Mostrar los datos ingresados en la nueva página
    nuevaPagina.document.write('<title>Resumen</title>');
    nuevaPagina.document.write("<h1>Datos ingresados:</h1>");
    nuevaPagina.document.write("<p>Nombre: " + nombre + "</p>");
    nuevaPagina.document.write("<p>Apellido: " + apellido + "</p>");
    nuevaPagina.document.write("<p>Correo: " + correo + "</p>");
    nuevaPagina.document.write("<p>Comentario: " + comentario + "</p>");
    nuevaPagina.window.print();
    
}

