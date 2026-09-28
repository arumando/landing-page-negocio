// Menú desplegable para celulares
const botonMenu = document.querySelector(".menu-boton");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});

// Cierra el menú al elegir una opción
menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Validación del formulario de contacto
const formulario = document.getElementById("formulario");
const estado = document.getElementById("formulario-estado");

const reglas = {
    nombre: (valor) => (valor.trim().length >= 3 ? "" : "Escribe al menos 3 letras."),
    correo: (valor) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()) ? "" : "Escribe un correo válido.",
    mensaje: (valor) => (valor.trim().length >= 10 ? "" : "El mensaje debe tener al menos 10 caracteres."),
};

function validarCampo(campo) {
    const error = reglas[campo.name](campo.value);
    const contenedor = campo.closest(".campo");
    contenedor.classList.toggle("campo--invalido", error !== "");
    contenedor.querySelector(".campo__error").textContent = error;
    return error === "";
}

formulario.querySelectorAll("input, textarea").forEach((campo) => {
    campo.addEventListener("blur", () => validarCampo(campo));
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const campos = [...formulario.querySelectorAll("input, textarea")];
    const todosValidos = campos.map(validarCampo).every(Boolean);

    if (!todosValidos) {
        estado.textContent = "";
        campos.find((c) => c.closest(".campo--invalido"))?.focus();
        return;
    }

    // Plantilla sin servidor: aquí se conectaría un servicio como Formspree o un backend propio.
    estado.textContent = "¡Gracias! Tu mensaje se validó correctamente (demostración: no se envió).";
    formulario.reset();
});
