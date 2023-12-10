document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Aquí puedes agregar la lógica para enviar la reserva, por ejemplo, a través de una solicitud AJAX.
    // También puedes validar los campos antes de enviar la reserva.
    alert('Reserva enviada correctamente');
  });
  
  document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Obtener la fecha y la hora seleccionadas por el usuario
    var selectedDate = new Date(document.getElementById('date').value + ' ' + document.getElementById('time').value);
    var currentDate = new Date();
  
    // Validar que la fecha y la hora seleccionadas sean posteriores a la fecha y la hora actuales
    if (selectedDate <= currentDate) {
      alert('Por favor, selecciona una fecha y hora futuras para tu reserva.');
      return;
    }
  
    // Aquí puedes agregar la lógica para enviar la reserva, por ejemplo, a través de una solicitud AJAX.
    // También puedes validar otros campos antes de enviar la reserva.
    alert('Reserva enviada correctamente');
  });
  