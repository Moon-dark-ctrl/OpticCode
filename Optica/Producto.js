

// Obtenemos el formulario y la tabla
const formularioProducto = document.getElementById('formulario-producto');
const tablaProductos = document.getElementById('tabla-productos');
const cuerpoTabla = document.getElementById('cuerpo-tabla');

// Creamos un arreglo para almacenar los productos
let productos = [];

// Función para agregar un producto
function agregarProducto(nombre, precio, existencias) {
 const producto = {
 nombre,
 precio,
 existencias
 };
 productos.push(producto);
 mostrarProductos();
}

// Función para mostrar los productos en la tabla
function mostrarProductos() {
 cuerpoTabla.innerHTML = '';
 productos.forEach((producto, index) => {
 const fila = document.createElement('tr');
 fila.innerHTML = `
 <td>${producto.nombre}</td>
 <td>${producto.precio}</td>
 <td>${producto.existencias}</td>
 <td>
 <button onclick="actualizarExistencias(${index})">Actualizar existencias</button>
 <button onclick="eliminarProducto(${index})">Eliminar producto</button>
 </td>
 `;
 cuerpoTabla.appendChild(fila);
 });
}

// Función para actualizar las existencias de un producto
function actualizarExistencias(index) {
 const nuevoValor = prompt('Ingrese el nuevo valor de existencias:');
 if (nuevoValor) {
 productos[index].existencias = nuevoValor;
 mostrarProductos();
 }
}

// Función para eliminar un producto
function eliminarProducto(index) {
 productos.splice(index, 1);
 mostrarProductos();
}

// Evento para agregar un producto
formularioProducto.addEventListener('submit', (e) => {
 e.preventDefault();
 const nombre = document.getElementById('nombre-producto').value;
 const precio = document.getElementById('precio').value;
 const existencias = document.getElementById('existencias').value;
 agregarProducto(nombre, precio, existencias);
 formularioProducto.reset();
});
