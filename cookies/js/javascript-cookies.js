document.addEventListener('DOMContentLoaded', function () {
    // Muestra el pop-up solo si no se ha aceptado la cookie
    if (!localStorage.getItem('cookieAccepted')) {
      document.getElementById('cookie-popup').style.display = 'block';
    }
  
    // Maneja el clic en el botón "Aceptar"
    document.getElementById('accept-cookie').addEventListener('click', function () {
      // Esconde el pop-up
      document.getElementById('cookie-popup').style.display = 'none';
      
      // Almacena la aceptación de la cookie en el almacenamiento local
      localStorage.setItem('cookieAccepted', 'true');
    });
  });
  