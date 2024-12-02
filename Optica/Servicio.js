// Obtenemos el formulario de búsqueda de lentes
const formularioLentes = document.getElementById('formulario-lentes');

// Obtenemos la tabla de lentes
const tablaLentes = document.getElementById('tabla-lentes');

// Obtenemos el cuerpo de la tabla de lentes
const cuerpoTablaLentes = document.getElementById('cuerpo-tabla-lentes');

// Creamos un arreglo para almacenar las lentes
let lentes = [];

// Función para agregar una lente
function agregarLente(marca, modelo, precio) {
 const lente = {
 marca,
 modelo,
 precio
 };
 lentes.push(lente);
 mostrarLentes();
}

// Función para mostrar las lentes en la tabla
function mostrarLentes() {
    cuerpoTablaLentes.innerHTML = '';
    lentes.forEach((lente, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${lente.marca}</td>
    <td>${lente.modelo}</td>
    <td>${lente.precio}</td>
    <td>
    <button onclick="eliminarLente(${index})">Eliminar</button>
    <button onclick="actualizarLente(${index})">Actualizar</button>
    </td>
    `;
    cuerpoTablaLentes.appendChild(fila);
    });
   }
   
   // Función para eliminar una lente
   function eliminarLente(index) {
    lentes.splice(index, 1);
    mostrarLentes();
   }
   
   // Función para actualizar una lente
   function actualizarLente(index) {
    const marca = prompt('Ingrese la nueva marca:');
    const modelo = prompt('Ingrese el nuevo modelo:');
    const precio = prompt('Ingrese el nuevo precio:');
    lentes[index].marca = marca;
    lentes[index].modelo = modelo;
    lentes[index].precio = precio;
    mostrarLentes();
   }
   
   // Evento para agregar una lente
   formularioLentes.addEventListener('submit', (e) => {
    e.preventDefault();
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const precio = document.getElementById('precio').value;
    agregarLente(marca, modelo, precio);
    formularioLentes.reset();
   });