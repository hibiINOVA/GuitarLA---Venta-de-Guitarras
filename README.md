# React

## ¿Qué es React?

React es una **librería de JavaScript** para construir interfaces de usuario (UI). Fue creada por Facebook y se basa en dividir la interfaz en **componentes reutilizables** que se actualizan de manera eficiente cuando cambian los datos.

React se enfoca principalmente en la capa de la vista (View) y no es un framework completo.

## Componentes

Un **componente** es la unidad básica de React. Representa una parte de la interfaz de usuario y puede reutilizarse en diferentes partes de una aplicación.

Tipos de componentes:

* Componentes funcionales (los más utilizados actualmente)
* Componentes de clase (obsoletos en la mayoría de los casos)

Ejemplo de componente funcional:

```jsx
function Componente() {
  return <h1>Hola React</h1>
}
```

## JSX

JSX es una extensión de JavaScript que permite escribir una sintaxis similar a HTML dentro del código JavaScript.

Características:

* Permite incrustar expresiones con `{ }`
* No es HTML real, se transforma a JavaScript
* Mejora la legibilidad del código

Ejemplo:

```jsx
const nombre = "React"

return <h2>Hola {nombre}</h2>
```

## Props (Propiedades)

Las **props** permiten pasar información de un componente padre a un componente hijo.

Características:

* Son de solo lectura
* Permiten reutilizar componentes con diferentes datos

Ejemplo:

```jsx
function Saludo({ nombre }) {
  return <p>Hola {nombre}</p>
}
```

## Estado (State)

El **estado** representa información que puede cambiar durante la ejecución de la aplicación.

En componentes funcionales se maneja con el hook `useState`.

Ejemplo:

```jsx
const [contador, setContador] = useState(0)
```

Cuando el estado cambia, React vuelve a renderizar el componente.

## Renderizado condicional

React permite mostrar distintos elementos dependiendo de una condición lógica.

Ejemplo:

```jsx
{activo ? <p>Activo</p> : <p>Inactivo</p>}
```

## Renderizado de listas

Para renderizar listas se utiliza el método `map()`.

Ejemplo:

```jsx
items.map(item => (
  <li key={item.id}>{item.nombre}</li>
))
```

El atributo `key` debe ser único para cada elemento.

## Virtual DOM

React utiliza un **Virtual DOM**, que es una representación en memoria del DOM real.

Proceso:

1. Cambia el estado
2. React actualiza el Virtual DOM
3. Compara los cambios
4. Actualiza solo lo necesario en el DOM real

Esto mejora el rendimiento de la aplicación.

## Flujo de datos unidireccional

React maneja un flujo de datos en una sola dirección:

* Los datos fluyen del componente padre al hijo
* Los componentes hijos no modifican directamente los datos del padre

Esto hace el código más predecible y fácil de mantener.

## Hooks

Los **hooks** permiten usar funcionalidades de React sin utilizar clases.

Hooks comunes:

* `useState`
* `useEffect`
* `useContext`

Ejemplo:

```jsx
useEffect(() => {
  console.log("Componente renderizado")
}, [])
```
