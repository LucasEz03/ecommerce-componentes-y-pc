# Tienda de Componentes

E-commerce de venta de componentes de PC (procesadores, placas de video, memorias RAM, almacenamiento, etc.) y computadoras armadas a medida. Permite explorar el catálogo de productos, ver el detalle de cada uno y gestionar un carrito de compras.

Proyecto desarrollado como parte del curso de React de Coderhouse. Actualmente cuenta con el layout inicial, el listado dinámico de productos y la vista de detalle de producto..

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- react-icons
- CSS
- ESLint

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/LucasEz03/ecommerce-componentes-y-pc.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd ecommerce-componentes-y-pc
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecutar la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── CartWidget.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemList.jsx
│   ├── Item.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemDetail.jsx
│   └── ItemCount.jsx
├── mock/
│   └── asyncMock.js
├── App.jsx
├── main.jsx
└── index.css
public/
└── img/
```

## Componentes

- **Navbar**: barra de navegación con el nombre de la tienda a la izquierda y, a la derecha, las categorías de productos (Monitores, Placas madre, Memoria RAM y Procesadores) junto al `CartWidget`. Está maquetada con Flexbox.
- **CartWidget**: componente hijo del `Navbar`. Muestra un ícono de carrito (de `react-icons`) y un número de notificación que representa la cantidad de productos en el carrito.
- **App**: componente raíz que ensambla el `Navbar`, el `ItemListContainer` (pasándole un mensaje de bienvenida mediante la prop `greeting`) y el `ItemDetailContainer`.
- **ItemListContainer**: contenedor que obtiene los productos con `getProducts` (promesa local de 2 segundos) usando `useState` y `useEffect`, y muestra un mensaje de carga mientras espera.
- **ItemList**: recibe el array de productos y los mapea a componentes `Item`.
- **Item**: tarjeta con la imagen, nombre, categoría, precio y stock de un producto.
- **ItemDetailContainer**: obtiene un producto con `getProductById` (promesa con `setTimeout`) usando `useState` y `useEffect`, y maneja los estados de carga y error.
- **ItemDetail**: muestra el detalle completo del producto (imagen, nombre, precio, categoría, descripción, especificaciones, garantía y stock).
- **ItemCount**: contador de cantidad que respeta el stock disponible y no baja de cero.
- **mock/asyncMock.js**: simula una API con las funciones `getProducts` (devuelve todos los productos en 2 segundos) y `getProductById` (recibe un `id`, devuelve el producto correspondiente en 1,5 segundos y rechaza la promesa si no existe).