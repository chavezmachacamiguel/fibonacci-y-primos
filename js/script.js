/**
 * Verifica si un número es primo basándose exclusivamente 
 * en el algoritmo de recuento de divisores (Sección 8.B del documento).
 */
function verificarSiEsPrimo(numero) {
    if (numero <= 1) return false; 
    
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    
    // Un número es primo si posee exactamente 2 divisores (1 y sí mismo)
    return contador === 2;
}

/**
 * Modifica dinámicamente las etiquetas de los campos del formulario
 * dependiendo del problema que el usuario elija resolver.
 */
function actualizarInterfazFormulario() {
    let tipo = document.getElementById("tipoOperacion").value;
    let labelCantidad = document.getElementById("labelCantidad");
    let ayudaInput = document.getElementById("ayudaInput");
    let inputControl = document.getElementById("valorEntrada");

    if (tipo === "ahorro") {
        labelCantidad.innerHTML = "Cantidad de meses a simular:";
        ayudaInput.innerHTML = "Cada mes el depósito aumentará de acuerdo a la serie Fibonacci.";
        inputControl.max = "45"; // Límite prudente para evitar desbordamientos monetarios
    } else {
        labelCantidad.innerHTML = "Cantidad de términos a evaluar:";
        ayudaInput.innerHTML = "Generará la secuencia y evaluará criptográficamente cuáles son primos.";
        inputControl.max = "40";
    }
}

/**
 * Función Principal encargada de procesar las operaciones matemáticas
 * y renderizar los resultados estructurados en formato HTML.
 */
function ejecutarHerramienta() {
    // Captura estricta de elementos mediante document.getElementById()
    let tipo = document.getElementById("tipoOperacion").value;
    let entrada = document.getElementById("valorEntrada");
    let contenedorResultados = document.getElementById("resultadoContenedor");
    let textoConclusion = document.getElementById("textoConclusion");

    let cantidad = parseInt(entrada.value);

    // Validación básica de seguridad en la entrada de datos
    if (isNaN(cantidad) || cantidad < 1) {
        contenedorResultados.innerHTML = "<p style='color:red;'><strong>Error:</strong> Por favor ingresa un número entero válido mayor a 0.</p>";
        return;
    }

    // Inicialización de variables de Fibonacci sin vectores dinámicos (Sección 8.A)
    let a = 0;
    let b = 1;
    let c;

    let htmlInyectable = "";

    if (tipo === "ahorro") {
        // --- CASO 1: SIMULACIÓN DE AHORRO PROGRESIVO ---
        let acumuladoTotal = 0;

        htmlInyectable += `
            <p><strong>Simulación de Plan Financiero de Ahorro Progresivo</strong></p>
            <table class="tabla-resultados">
                <thead>
                    <tr>
                        <th>Mes de Ahorro</th>
                        <th>Depósito del Mes (Bs.)</th>
                        <th>Balance Acumulado (Bs.)</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let mes = 1; mes <= cantidad; mes++) {
            let depositoMes = a;
            acumuladoTotal += depositoMes;

            htmlInyectable += `
                <tr>
                    <td>Mes ${mes}</td>
                    <td>Bs. ${depositoMes.toLocaleString()}</td>
                    <td><strong>Bs. ${acumuladoTotal.toLocaleString()}</strong></td>
                </tr>
            `;

            // Avanzar en la iteración de Fibonacci
            c = a + b;
            a = b;
            b = c;
        }

        htmlInyectable += `
                </tbody>
            </table>
            <div class="total-ahorro-box">
                💰 ¡Ahorro Total Logrado: Bs. ${acumuladoTotal.toLocaleString()}!
            </div>
        `;

        // Modificar dinámicamente la conclusión para que se adapte al contexto ejecutado
        textoConclusion.innerHTML = `Al finalizar la simulación de <strong>${cantidad} meses</strong>, queda demostrado que el uso de la sucesión de Fibonacci en economías domésticas incentiva un crecimiento exponencial controlado de los fondos. Comenzando con depósitos pequeños de base, el ahorrador expande su capital paulatinamente, consolidando una base de ahorro robusta de <strong>Bs. ${acumuladoTotal.toLocaleString()}</strong> de forma orgánica y sistemática.`;

    } else {
        // --- CASO 2: FIBONACCI Y PRIMOS COMBINADOS ---
        htmlInyectable += `
            <p><strong>Análisis de Seguridad en Secuencia Combinada</strong></p>
            <table class="tabla-resultados">
                <thead>
                    <tr>
                        <th>Término</th>
                        <th>Valor Generado</th>
                        <th>Estado de Seguridad</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 1; i <= cantidad; i++) {
            let valorActual = a;
            let esNumeroPrimo = verificarSiEsPrimo(valorActual);

            let etiquetaEstado = esNumeroPrimo 
                ? '<span class="badge primo">🛡️ Es Primo (Seguro)</span>' 
                : '<span class="badge compuesto">❌ No es Primo</span>';

            htmlInyectable += `
                <tr>
                    <td>Posición ${i}</td>
                    <td><strong>${valorActual.toLocaleString()}</strong></td>
                    <td>${etiquetaEstado}</td>
                </tr>
            `;

            // Avanzar en la iteración de Fibonacci
            c = a + b;
            a = b;
            b = c;
        }

        htmlInyectable += `
                </tbody>
            </table>
        `;

        textoConclusion.innerHTML = `El análisis criptográfico sobre los primeros <strong>${cantidad} términos</strong> de Fibonacci ha filtrado de forma selectiva los elementos con propiedades primarias. Estos valores específicos que lograron activar la etiqueta de seguridad constituyen números de alta complejidad estructural, ideales para ser seleccionados como semillas aleatorias en la codificación de sistemas web interactivos.`;
    }

    // Inyección de resultados en la página (Restricción: No usar únicamente console.log)
    contenedorResultados.className = ""; // Remueve la clase de contenedor vacío
    contenedorResultados.innerHTML = htmlInyectable;
}

window.addEventListener("DOMContentLoaded", actualizarInterfazFormulario);
