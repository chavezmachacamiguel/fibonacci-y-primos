# fibonacci-y-primos
# Módulo Avanzado: Intersección Numérica de la Serie de Fibonacci y Números Primos

Este módulo interactivo resuelve un problema avanzado de análisis numérico, uniendo la progresión de crecimiento exponencial de Fibonacci con los filtros de aislamiento aritmético de la teoría de números primos en una sola herramienta de software.

---

## 🔬 Contexto del Problema Real
En la ciencia de la computación avanzada, los sistemas de encriptación y los generadores de gráficos por computadora a menudo requieren secuencias numéricas que no solo crezcan de manera orgánica, sino que también posean un alto grado de impredecibilidad aritmética para evitar ataques de ingeniería inversa. 

La sucesión de Fibonacci por sí sola genera un patrón predecible de crecimiento.Sin embargo, al filtrar esta secuencia para extraer únicamente aquellos valores que además cumplen con la condición de ser **números primos**, se obtiene una subserie numérica especial dotada de características criptográficas únicas Este sistema permite automatizar la detección de estos "primos de Fibonacci", facilitando la identificación de variables seguras para el diseño de software matemático y simulación de redes complejas.

---

## ⚙️ Características Clave del Sistema

**Procesamiento Dual Simultáneo:** Genera la sucesión matemática y evalúa la primalidad de cada término en tiempo real dentro del mismo flujo de ejecución.
**Control de Longitud Dinámico:** El usuario define mediante un formulario interactivo la cantidad exacta de términos de la serie que desea poner bajo inspección.
**Filtro de Aislamiento Aritmético:** Evalúa cada número generado contando sus residuos exactos (operador `%`) para descartar de inmediato los valores compuestos.
**Diseño de Interfaz Híbrida:** Presenta una estética visual limpia, ordenada y responsiva, optimizada para visualizar listas complejas de datos tanto en computadoras como en celulares.

---

## 🧮 Explicación del Algoritmo Producido

Para cumplir estrictamente con las pautas de rendimiento y restricciones lógicas del proyecto, el script ejecuta los siguientes pasos secuenciales:

1. **Captura y Conversión:** Mediante la instrucción `document.getElementById()`, el sistema toma el número de términos solicitado por el usuario en el formulario y lo transforma en un entero operable.
2. **Generación de la Serie sin Vectores:** El algoritmo utiliza tres variables de control independientes (`a = 0`, `b = 1` y `c`) para calcular iterativamente los números de Fibonacci uno a uno, optimizando el uso de la memoria del navegador.
3. **Sub-evaluación de Primalidad:** Por cada término obtenido en la serie, el sistema activa un bucle interno `for` que cuenta cuántas divisiones exactas posee dicho valor.Si el acumulador de residuos registra exactamente **2 divisores** (divisible únicamente entre 1 y sí mismo), el número es seleccionad.
4. **Inyección en Pantalla:** Los valores que superan con éxito ambos filtros matemáticos se estructuran visualmente y se muestran directamente en la página web mediante `.innerHTML`, garantizando el cumplimiento de la restricción de no usar la consola.

---

## 🛠️ Tecnologías Empleadas
**HTML5:** Estructuración de las secciones de teoría, campos de captura del formulario y botones de acción.
**CSS3:** Maquetación responsiva avanzada para la visualización de listas numéricas y estilos de diseño visual ordenado.
**JavaScript (Vanilla JS):** Lógica matemática de control para la generación combinada de ambas propiedades aritméticas y manipulación del DOM.

---

## 📂 Estructura del Módulo Combinado

```text
fibonacci-primos-combinado/
├── index.html
├── LÉAME.md
│
├── css/
│   └── estilos.css
│
└── js/
    └── script-combinado.js
