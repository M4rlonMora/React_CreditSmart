📌 CreditSmart – Simulador y Aplicación de Créditos

✨ Proyecto desarrollado con React + Vite

🚀 Descripción del Proyecto

CreditSmart es una aplicación moderna creada en React + Vite que permite:

Simular créditos de manera interactiva 💸

Aplicar a créditos mediante un formulario profesional 📝

Navegar entre vistas con una interfaz limpia y moderna

Contar con componentes reutilizables y organización profesional

El objetivo del proyecto es ofrecer una herramienta sencilla, rápida y agradable para los usuarios que desean evaluar y solicitar un crédito.

🏗️ Tecnologías Utilizadas
Tecnología	Uso
React	Librería principal de la UI
Vite	Entorno de desarrollo ultrarrápido
CSS Modules / CSS personalizado	Estilos modernos y responsivos
React Router DOM	Navegación entre vistas
Git + GitHub	Control de versiones y publicación
📂 Estructura del Proyecto
creditsmart/
│── public/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Simulator.jsx
│   │   └── Apply.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles/
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── simulator.css
│   │   └── apply.css
│── package.json
│── vite.config.js
│── README.md

🧪 Cómo Ejecutar el Proyecto
▶️ 1. Instalar dependencias
npm install

▶️ 2. Ejecutar en modo desarrollo
npm run dev

▶️ 3. Abrir en el navegador
http://localhost:5173

▶️ 4. Construir para producción
npm run build

🌐 Cómo Subir el Proyecto a GitHub (con 8 commits)

Ideal si ya tienes todo hecho y solo quieres subirlo bien organizado.

📌 1. Inicializar repositorio
git init

📌 2. Agregar el remoto (por si ya existía)
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/creditsmart.git

📌 3. Realizar 8 commits (recomendados)
git add . 
git commit -m "Inicialización del proyecto CreditSmart"

git add src/
git commit -m "Estructura de carpetas del proyecto implementada"

git add src/components
git commit -m "Componentes base creados: Header, Footer y Card"

git add src/pages/Home.jsx
git commit -m "Vista Home implementada"

git add src/pages/Simulator.jsx
git commit -m "Simulador de crédito funcional con tarjetas modernas"

git add src/pages/Apply.jsx
git commit -m "Formulario Apply moderno y responsive"

git add src/styles
git commit -m "Estilos CSS implementados para todas las vistas"

git add README.md
git commit -m "README profesional agregado"

📌 4. Subir todo
git push -u origin main

💳 Características Principales
✔️ Simulador de Créditos

Tarjetas modernas y proporcionadas

Cálculo rápido y dinámico

Interfaz intuitiva

✔️ Formulario de Aplicación (Apply)

Diseño moderno tipo "UI fintech"

Campos validados

Layout limpio, centrado y corporativo

✔️ Navegación Profesional

Header responsive

Footer elegante

Rutas organizadas

🖥️ Capturas (Opcional)

(Aquí puedes subir screenshots cuando tengas el proyecto visualmente terminado)

![Simulator](./screenshots/simulator.png)
![Apply](./screenshots/apply.png)

📘 Cómo Funciona

El usuario ingresa al Home.

Desde el menú puede ingresar al Simulador.

Allí selecciona tipo de crédito, monto y plazo.

Puede aplicar inmediatamente desde el botón “Solicitar”.

El formulario “Apply” registra los datos.

Todo se maneja en componentes organizados y limpios.

🙌 Autor

Marlon Andrés Mora Vasco
