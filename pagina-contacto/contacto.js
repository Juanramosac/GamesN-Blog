
document.addEventListener('DOMContentLoaded', () => {
 
  const formContacto = document.getElementById('formContacto');
  const alertaMensaje = document.getElementById('alertaMensaje');

  if (formContacto && alertaMensaje) {
    
    formContacto.addEventListener('submit', (event) => {
      // Evita que la página se recargue al enviar el formulario
      event.preventDefault();

      //Mostrar la alerta activando las clases de Bootstrap 5
      alertaMensaje.classList.remove('fade');
      alertaMensaje.classList.add('show');

      // Limpiar los campos del formulario tras el envío
      formContacto.reset();
    });
  }
});