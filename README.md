# React

Librería de JavaScript para construir interfaces de usuario mediante componentes reutilizables.

**Permite:**
- Dividir la interfaz en componentes independientes
- Reutilizar código
- Manejar el estado de la aplicación de forma reactiva

## Componentes

Un componente es una función que retorna JSX y representa una parte de la interfaz.

**Características:**
- Encapsulan lógica y vista
- Pueden reutilizarse
- Pueden ser padres o hijos

**Ejemplo conceptual:**
- **Componente padre:** controla el estado
- **Componente hijo:** recibe datos y funciones

## Relación Padre – Hijo (Props)

React utiliza un flujo de datos unidireccional:
- El componente padre define el estado
- El componente hijo recibe información mediante props
- El hijo puede ejecutar funciones del padre

**Esto permite:**
- Control centralizado del estado
- Comunicación clara entre componentes

## Props

Las props son parámetros que se envían de un componente padre a un componente hijo.

**Se usan para:**
- Compartir datos
- Compartir funciones
- Mantener sincronizada la interfaz

> **Nota:** Las props son solo de lectura para el componente hijo.

## Estado (useState)

El estado permite almacenar información que cambia durante la ejecución.

**Características:**
- Al cambiar el estado, React vuelve a renderizar
- El estado vive normalmente en el componente padre
- Se comparte con hijos mediante props

## React Hooks

### useState
Hook utilizado para:
- Manejo de estado local
- Control de datos dinámicos

### useEffect
Hook utilizado para:
- Ejecutar efectos secundarios
- Sincronizar datos con APIs del navegador como localStorage

## LocalStorage (Web Storage API)

API nativa del navegador.

**Usada para:**
- Persistencia de datos
- Guardar información entre recargas

Se integra con React usando `useEffect`.

## JSX

Extensión de sintaxis que permite escribir HTML dentro de JavaScript.

**Usado para:**
- Renderizado dinámico
- Condicionales
- Manejo de eventos

## JavaScript (ES6+)

Lenguaje principal del proyecto.

**Características utilizadas:**
- Arrow functions
- Desestructuración
- Spread operator
- Métodos de arrays (`map`, `reduce`, `filter`, `find`)

## Renderizado dinámico

Uso de métodos de arrays para renderizar listas de componentes:
- `.map()` para mostrar elementos dinámicamente
- Renderizado condicional para mostrar u ocultar componentes

## Virtual DOM

React utiliza un Virtual DOM para optimizar el rendimiento:
- Compara cambios
- Actualiza solo lo necesario en el DOM real

## Bootstrap

Framework CSS utilizado para estilos y diseño responsivo.

**Usado para:**
- Grid system
- Botones
- Tablas
- Utilidades de diseño

## CSS

Estilos personalizados complementarios a Bootstrap.

## Vite

Herramienta moderna de desarrollo frontend.

**Usada para:**
- Servidor de desarrollo rápido
- Hot reload
- Build optimizado

## NPM

Gestor de paquetes de Node.js.

**Usado para:**
- Instalación de dependencias
- Ejecución de scripts

## Ejecución del proyecto
```bash
npm install
npm run dev
```