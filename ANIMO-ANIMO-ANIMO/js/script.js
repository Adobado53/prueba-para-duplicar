// Selecionar los elementos del formulario
const form = document.getElementById('formulario');
const nombreArticuloInput = document.getElementById('nombreArticulo');
const precioInput = document.getElementById('precio');
const idUsuarioInput = document.getElementById('idUsuario');
const tipoProductoSelect = document.getElementById('tipoProducto');
const cantidadInput = document.getElementById('cantidad');

// Función para agregar al carrito de compras
function agregarAlCarrito() {
  // Obtener los valores de los campos
  const nombreArticulo = nombreArticuloInput.value;
  const precio = parseFloat(precioInput.value);
  const idUsuario = parseInt(idUsuarioInput.value);
  const tipoProducto = tipoProductoSelect.value;
  const cantidad = parseInt(cantidadInput.value);

  // Crear un objeto con los datos del producto
  const producto = {
    nombreArticulo: nombreArticulo,
    precio: precio,
    idUsuario: idUsuario,
    tipoProducto: tipoProducto,
    cantidad: cantidad
  };

  // Agregar el producto al carrito de compras
  // (aquí puedes implementar la lógica para agregar el producto al carrito)
  console.log('Producto agregado al carrito:', producto);
}

// Agregar evento de submit al formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  agregarAlCarrito();
});