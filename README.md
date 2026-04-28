# Zafiro Cocktail Web - Cóctel Orbis Insulae

Una experiencia web premium e interactiva diseñada para presentar el exclusivo **Cóctel Orbis Insulae** de Zafiro Hotels. Esta landing page ha sido desarrollada buscando la máxima elegancia visual, fluidez en las animaciones y una optimización perfecta para dispositivos móviles (ideal para ser accedida mediante códigos QR en establecimientos).

## 🌟 Características Principales

-   **Sistema Multiidioma (ES/EN):** Sistema de internacionalización (i18n) personalizado que permite conmutar entre español e inglés instantáneamente sin recargar la página, manteniendo la preferencia del usuario mediante `localStorage`.
-   **Hotspots Interactivos:** El Hero incluye puntos de interacción dinámicos que, al ser pulsados, despliegan cajas de información sobre los elementos clave del cóctel.
-   **Header Adaptativo (Smart Header):** Cabecera inteligente que detecta el scroll del usuario para cambiar su estilo de transparente a sólido, ajustando logotipos y colores para garantizar la legibilidad en todo momento y respetando el branding de Zafiro Hotels.
-   **Guía de Elaboración Paso a Paso:** Sección detallada que guía al usuario a través del proceso de creación del cóctel, con apoyo visual y descripciones precisas. (Algunas imagenes son generadas por IA, otras son reales)
-   **Animaciones "Scroll-Reveal":** Implementación de `IntersectionObserver` para activar animaciones de entrada fluidas a medida que el usuario navega por la página.
-   **Diseño Mobile-First:** Menú lateral optimizado y disposición de elementos pensada para una navegación táctil impecable.

## 🛠️ Stack Tecnológico

-   **Entorno de Desarrollo:** [Vite](https://vitejs.dev/) - Para un bundling ultrarrápido y desarrollo eficiente.
-   **Core:** HTML5 Semántico y JavaScript Moderno (ES6+).
-   **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/) - Utilizado para la estructura responsive y el diseño base.
-   **Tipografía:** Integración de Google Fonts (*Playfair Display* para elegancia clásica y *Lato* para legibilidad moderna).
-   **Despliegue:** Optimizado para [Vercel](https://vercel.com/) (Zero Config).

## 📁 Estructura del Proyecto

```text
zafiro-cocktail-web/
├── public/                 # Assets estáticos (Imágenes, Logotipos)
│   └── img/                # Recursos visuales del cóctel
├── src/
│   ├── locales/            # Diccionarios de traducción (i18n)
│   │   ├── es.json         # Textos en Español
│   │   └── en.json         # Textos en Inglés
│   ├── main.js             # Lógica principal (i18n, animaciones, UI)
│   └── style.css           # Configuración de Tailwind y estilos custom
├── index.html              # Estructura principal y puntos de anclaje
├── tailwind.config.js      # Configuración de temas y colores corporativos
├── package.json            # Scripts y dependencias
└── vite.config.js          # Configuración del empaquetador Vite
```

## 🚀 Instalación y Desarrollo

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar entorno de desarrollo:**
    ```bash
    npm run dev
    ```
    La web estará disponible en `http://localhost:5173`.

## 🏗️ Construcción para Producción

Para generar los archivos optimizados y listos para subir al servidor:

```bash
npm run build
```

El resultado se encontrará en la carpeta `/dist`.

## 🌐 Internacionalización (i18n)

Para añadir o modificar textos, simplemente edite los archivos JSON en `src/locales/`. El sistema buscará automáticamente las claves correspondientes a los atributos `data-i18n` definidos en el HTML.

## 📄 Licencia

Este proyecto es propiedad exclusiva de **Zafiro Hotels**. Todos los derechos de imagen y contenido están reservados.

