const formulario = document.getElementById('formulario-alta-ofertas');
const tabla = document.getElementById('tabla-ofertas');
const cuerpoTabla = document.getElementById('cuerpo-tabla');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreOferta = document.getElementById('nombre-oferta').value;
  const descripcionOferta = document.getElementById('descripcion-oferta').value;
  const precioOferta = document.getElementById('precio-oferta').value;
  const imagenOferta = document.getElementById('imagen-oferta').value;

  const fila = document.createElement('tr');
  const celdaNombre = document.createElement('td');
  const celdaDescripcion = document.createElement('td');
  const celdaPrecio = document.createElement('td');
  const celdaImagen = document.createElement('td');
  const celdaAcciones = document.createElement('td');

  celdaNombre.textContent = nombreOferta;
  celdaDescripcion.textContent = descripcionOferta;
  celdaPrecio.textContent = precioOferta;
  celdaImagen.textContent = imagenOferta;

  const botonDarDeAlta = document.createElement('button');
  botonDarDeAlta.textContent = 'Dar de alta';
  botonDarDeAlta.addEventListener('click', () => {
    alert('La oferta ya fue dada de alta');
    botonDarDeAlta.disabled = true;
  });

  const botonDarDeBaja = document.createElement('button');
  botonDarDeBaja.textContent = 'Dar de baja';
  botonDarDeBaja.addEventListener('click', () => {
    alert('La oferta fue dada de baja');
    fila.remove();
  });

  celdaAcciones.appendChild(botonDarDeAlta);
  celdaAcciones.appendChild(botonDarDeBaja);

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaDescripcion);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaImagen);
  fila.appendChild(celdaAcciones);

  cuerpoTabla.appendChild(fila);
});
