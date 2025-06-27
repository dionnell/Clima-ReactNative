# App Clima React Native

Esta aplicación móvil permite consultar el clima actual de cualquier ciudad del mundo utilizando la API de OpenWeatherMap.

## Funcionalidades

- **Búsqueda de clima:** Ingresa el nombre de una ciudad y un país para obtener el clima actual.
- **Visualización de datos:** Muestra información relevante como temperatura, condiciones y otros datos meteorológicos.
- **Cambio dinámico de fondo:** El fondo de la app cambia de color según la temperatura actual (frío, templado o cálido).
- **Validación y alertas:** Si no se encuentra la ciudad o país, muestra una alerta amigable.
- **Interfaz amigable:** Utiliza gradientes y componentes visuales modernos para una mejor experiencia de usuario.
- **Ocultamiento del teclado:** El teclado se oculta automáticamente al tocar fuera del formulario.

## Tecnologías utilizadas

- React Native
- React Native Linear Gradient
- API de OpenWeatherMap

## Estructura principal

- `App.jsx`: Componente principal que gestiona el estado y la lógica de la aplicación.
- `src/components/Formulario.jsx`: Formulario para ingresar ciudad y país.
- `src/components/Clima.jsx`: Muestra los datos del clima.
- `src/helper/FormatToCentigrados.js`: Función para convertir la temperatura a grados centígrados.

## Configuración

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta la app en tu emulador o dispositivo físico con `npx react-native run-android` o `npx react-native run-ios`.
4. Asegúrate de tener una API key válida de OpenWeatherMap.

---

