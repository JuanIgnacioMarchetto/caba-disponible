document.getElementById('verificar-btn').addEventListener('click', verificarDisponibilidad);

function verificarDisponibilidad() {
  var fechaInicio = new Date(document.getElementById('fecha-inicio').value);
  var fechaFin = new Date(document.getElementById('fecha-fin').value);

  if (fechaInicio <= fechaFin) {
    var fechasSalida = obtenerFechasSalida(); // Obtiene todas las fechas de salida seleccionadas
    var ocupada = false; // Variable para almacenar si la cabaña está ocupada o no

    // Aquí iría tu lógica para verificar la disponibilidad de la cabaña, utilizando las fechas de salida

    if (ocupada) {
      document.getElementById('resultado').textContent = 'La cabaña está ocupada en esas fechas.';
    } else {
      document.getElementById('resultado').textContent = 'La cabaña está disponible en esas fechas.';
    }
  } else {
    document.getElementById('resultado').textContent = 'La fecha de inicio debe ser anterior o igual a la fecha de fin.';
  }
}

function obtenerFechasSalida() {
  var fechasSalida = [];
  var fechaFin = new Date(document.getElementById('fecha-fin').value);

  // Obtener todas las fechas de salida seleccionadas
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
    var fechaSalida = new Date(checkbox.value);
    if (fechaSalida <= fechaFin) {
      fechasSalida.push(fechaSalida);
    }
  });

  return fechasSalida;
}

function generarCheckboxesFechasSalida() {
  var fechaInicio = new Date(document.getElementById('fecha-inicio').value);
  var fechaFin = new Date(document.getElementById('fecha-fin').value);

  var fechasSalidaContainer = document.getElementById('fechas-salida-container');
  fechasSalidaContainer.innerHTML = '';

  var fechaActual = new Date(fechaInicio);
  while (fechaActual <= fechaFin) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = fechaActual.toISOString().split('T')[0];

    var label = document.createElement('label');
    label.appendChild(document.createTextNode(fechaActual.getDate() + ' de ' + obtenerNombreMes(fechaActual.getMonth())));

    fechasSalidaContainer.appendChild(checkbox);
    fechasSalidaContainer.appendChild(label);

    fechaActual.setDate(fechaActual.getDate() + 1);
  }
}

function obtenerNombreMes(numeroMes) {
  var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return meses[numeroMes];
}

document.getElementById('fecha-inicio').addEventListener('change', generarCheckboxesFechasSalida);
document.getElementById('fecha-fin').addEventListener('change', generarCheckboxesFechasSalida);
