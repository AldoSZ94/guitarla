# 🎸 GuitarLA

Tienda web de guitarras desarrollada con **React y JavaScript**. Permite explorar un catálogo de instrumentos y administrar un carrito de compras con cantidades y total actualizado.

El proyecto está enfocado en el manejo de estado con React Hooks, la composición de componentes y la persistencia de datos en el navegador mediante `localStorage`.

## 🚀 Demo

🔗 **Live Demo:** https://guitarla-aldosz94.netlify.app/

## 🛠️ Tecnologías utilizadas

- **React**
- **JavaScript**
- **Vite**
- **CSS** 
- **HTML**

## ✨ Características

- 🎸 Catálogo de 12 guitarras con imagen, descripción y precio.
- 🛒 Carrito de compras interactivo.
- ➕➖ Incremento y decremento de unidades por producto.
- 🔢 Límite de cinco unidades por guitarra.
- 🗑️ Eliminación de productos y opción para vaciar el carrito.
- 💰 Cálculo automático del total de compra.
- 💾 Persistencia del carrito en `localStorage` al recargar la página.
- 📱 Diseño adaptable a distintos tamaños de pantalla.
- 🧩 Componentes reutilizables para el encabezado y las tarjetas de producto.

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto trabajé principalmente en:

- Manejo de estado en componentes de React con `useState`.
- Uso de `useEffect` para sincronizar el carrito con `localStorage`.
- Uso de `useMemo` para calcular el estado vacío y el total del carrito.
- Actualización inmutable de arreglos y objetos en el estado.
- Comunicación de acciones entre componentes mediante props.
- Renderizado de listas de productos y uso de claves (`key`).
- Organización de una aplicación en componentes y módulos de datos.
- Creación de una interfaz adaptable con CSS y clases utilitarias.

## 🛍️ Gestión del carrito

El estado del carrito se administra en el componente principal `App`. Al agregar una guitarra, se incorpora al carrito o aumenta su cantidad si ya existe. La cantidad puede ajustarse entre una y cinco unidades por producto.

Cada cambio se guarda en `localStorage`, por lo que el carrito se restaura cuando el usuario vuelve a cargar la aplicación. El encabezado presenta los productos, sus cantidades y el total calculado.

## 👨‍💻 Autor

**Aldo Sandoval Zepeda**  
Desarrollador Web

- GitHub: [AldoSZ94](https://github.com/AldoSZ94)
