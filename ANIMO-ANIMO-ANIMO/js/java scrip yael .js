// Replace with the actual API endpoint URL
const apiUrl = "https://your-api-endpoint-url";

// Handle form submission
const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(productForm);
    const data = {
        nombreArticulo: formData.get("nombreArticulo"),
        precioPesos: formData.get("precioPesos"),
        idUsuario: formData.get("idUsuario"),
        tipoProducto: formData.get("tipoProducto"),
        cantidadProductos: formData.get("cantidadProductos")
    };

    // Send data to the API using fetch or other methods
    fetch(apiUrl, {
        method: "POST", // Change to "POST" for sending data
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Convert data to JSON string
    })
        .then(response => response.json()) // Parse JSON response
        .then(responseData => {
            // Handle successful response
            const dataContainer = document.getElementById("data-container");
            dataContainer.innerHTML = `
                <p>Datos enviados correctamente:</p>
                <ul>
                    <li>Nombre del Artículo: ${data.nombreArticulo}</li>
                    <li>Precio en pesos mexicanos: ${data.precioPesos}</li>
                    <li>ID del usuario: ${data.idUsuario}</li>
                    <li>Tipo de producto: ${data.tipoProducto}</li>
                    <li>Cantidad de productos: ${data.cantidadProductos}</li>
                </ul>
            `;
        })
        .catch(error => console.error("Error:", error)); // Handle errors
});
