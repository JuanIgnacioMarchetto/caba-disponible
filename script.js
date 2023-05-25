document.getElementById('verificar-btn').addEventListener('click', verificarDisponibilidad);

function verificarDisponibilidad() {
  var fechaInicio = new Date(document.getElementById('fecha-inicio').value);
  var fechaFin = new Date(document.getElementById('fecha-fin').value);

  if (fechaInicio <= fechaFin) {
    var ocupada = false; 

    if (ocupada) {
      document.getElementById('resultado').textContent = 'La cabaña está ocupada en esas fechas.';
    } else {
      document.getElementById('resultado').textContent = 'La cabaña está disponible en esas fechas.';
    }
  } else {
    document.getElementById('resultado').textContent = 'La fecha de inicio debe ser anterior o igual a la fecha de fin.';
  }
}
