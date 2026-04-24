/* =========================
   MENSAJE DE BIENVENIDA
   Se ejecuta al cargar la página
========================= */
alert("Bienvenido a mi portafolio 🚀");

/* =========================
   FUNCIÓN: cambiarTexto
   Modifica el contenido de un párrafo
========================= */
function cambiarTexto() {
    document.getElementById("texto").textContent =
        "Ahora el texto cambió gracias a JavaScript 😎";
}

/* =========================
   FUNCIÓN: toggleMensaje
   Muestra u oculta un mensaje dinámicamente
========================= */
function toggleMensaje() {

    // Se obtiene el elemento
    const mensaje = document.getElementById("mensaje");

    // Se evalúa su estado actual
    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}