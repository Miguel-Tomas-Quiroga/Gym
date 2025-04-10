document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
  
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorMensaje = document.getElementById("error-mensaje");
    const exito = document.getElementById("mensaje-exito");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      limpiarErrores();
  
      let valido = true;
  
      if (nombre.value.trim() === "") {
        mostrarError(errorNombre, "Por favor, ingresa tu nombre.");
        valido = false;
      }
  
      if (email.value.trim() === "") {
        mostrarError(errorEmail, "Por favor, ingresa tu correo.");
        valido = false;
      } else if (!validarEmail(email.value.trim())) {
        mostrarError(errorEmail, "El correo no es válido.");
        valido = false;
      }
  
      if (mensaje.value.trim() === "") {
        mostrarError(errorMensaje, "Por favor, escribe un mensaje.");
        valido = false;
      }
  
      if (valido) {
        exito.hidden = false;
        form.reset();
      } else {
        exito.hidden = true;
      }
    });
  
    function mostrarError(elemento, mensaje) {
      elemento.textContent = mensaje;
    }
  
    function limpiarErrores() {
      errorNombre.textContent = "";
      errorEmail.textContent = "";
      errorMensaje.textContent = "";
    }
  
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  