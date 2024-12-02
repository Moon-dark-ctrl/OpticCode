const formularioBusqueda = document.getElementById('formulario-busqueda-usuario');
const tablaHistorialClinico = document.getElementById('tabla-historial-clinico');
const cuerpoTablaHistorialClinico = document.getElementById('cuerpo-tabla-historial-clinico');

formularioBusqueda.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreUsuario = document.getElementById('nombre-usuario').value;

  // Simulación de búsqueda de historial clínico
  const historialClinico = [
    {
      fecha: '2022-01-01',
      diagnostico: 'Miopía',
      tratamiento: 'Gafas de lectura',
      observaciones: 'Revisión anual'
    },
    {
      fecha: '2022-06-01',
      diagnostico: 'Hipermetropía',
      tratamiento: 'Lentes de contacto',
      observaciones: 'Revisión cada 6 meses'
    }
  ];

  cuerpoTablaHistorialClinico.innerHTML = '';
  historialClinico.forEach((historial) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${historial.fecha}</td>
      <td>${historial.diagnostico}</td>
      <td>${historial.tratamiento}</td>
      <td>${historial.observaciones}</td>
    `;
    cuerpoTablaHistorialClinico.appendChild(fila);
  });
});