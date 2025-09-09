# Nora Creaciones - React + Vite + Tailwind CSS

Este proyecto es un **setup minimalista** para usar **React con Vite**, integrado con **Tailwind CSS** y **CSS modular**, listo para desarrollo rápido y escalable.

## Características

- **React 18** con **Fast Refresh** mediante Vite.
- **Tailwind CSS** para estilos utilitarios y responsivos.
- **CSS modular** para componentes aislados (`.module.css`), evitando conflictos globales.
- Compatible con **TypeScript** (opcional, se usa solo en `ProductCard.tsx`).
- Configuración inicial de **ESLint** para mantener un código limpio.

## Plugins oficiales utilizados

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – usa **Babel** para Fast Refresh.  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) – usa **SWC** para Fast Refresh (opcional, más rápido).

## Estructura del proyecto

- src/
- ├ components/
- │ ├─ Navbar.jsx
- │ ├─ Hero.jsx
- │ ├─ ProductCard.tsx
- │ └─ Footer.jsx
- App.jsx
- └─ main.jsx


 ### Nota:
- Cada componente tiene su propio **CSS modular** (`Componente.module.css`) para estilos aislados.
- `index.css` contiene las directivas de **Tailwind CSS**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Recomendaciones
- Para proyectos de producción se recomienda usar TypeScript con reglas de linting habilitadas.

- Revisa el template oficial de React + TS con Vite para integrarlo.

- Mantén tus componentes pequeños y reutilizables, usando CSS modular y Tailwind para mantener consistencia en el diseño.