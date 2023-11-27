# Proyecto Final Equipo 4

## Participantes
- Benitez, Lucas
- Castro, Ricardo
- Iglesias, José Manuel
- Seara, Amanda

## Funcionalidades y sus características

1. **Pantalla de Inicio:**
   - Usando los botones "signup" y "login" de la barra de navegación de la pantalla de inicio es posible registrar un administrador (signup), logear un administrador (login), o desde los botones centrales un jugador puede unirse a una partida con el botón "unirse" o mediante el motón "crear", acceder a la pantalla nueva sala (new-room).

2. **Login:**
   - Página para iniciar sesión.
   - Solo es necesario ingresar el email y la contraseña.
   - Para usar un usuario admin ya registrado usar:
      email: "equipo4@gmail.com",
      password:"asdf1234"

3. **Sing Up:**
   - Funcionalidad para crear una nueva cuenta de usuario.
   - El usuario admin se registra desde esta pantalla ingresando un nombre de usuario, email, password y confirmación de password.

4. **Listado de propuestas:**
   - Desde esta pantalla el jugador puede ver un listado de las propuestas disponibles para participar, al clickear en la porpuesta deseada, lo lleva la pantalla de esa propuesta concreata, pudiendo ver las actividades que la componen.

5. **Creación de Propuestas:**
   - Permite a los usuarios admin crear nuevas propuestas, pudiendo darle un nombre a la propuesta, seleccionar de una lista las actividades predefinidas o utilizando el botón "Add Activities" agregar nuevas actividades para ser incluidas. Una vez que la propuesta esta definida, se puede guardar con el botón "save proposal".

6. **Listado de actividades:**
   - Permite a los usuarios ver todas las actividades disponibles y seleccionar una clickeando en el botón "go" que se incluye en cada una.
   - El usuario con role admin, puede clickear en la "ruedíta" en la esquina superior derecha de la tarjeta corresponndiete a una actividad, accediendo a la pantalla de modificación de la actividad.

7. **ABM de actividades:**
   - La pantalla de alta, baja y modificación de actividades permite realizar estas tareas de mantenimiento en cualquier actividad.

8. **Join de jugadores:**
   - Desde esta pantalla los jugadores podrán ingresar con su nombre de usuario y con el código necesario, a una actividad.

9. **Sala de espera:**
   - Desde esta pantalla los jugadores esperan para ingresar a una actividad, en donde pueden ver el código para participar, la cantidad de usuarios participando, el nombre de la sala y enviar un mensaje a la sala clickeando en el botón "Enviar mensaje a Sala".

10. **Pantalla de juego en actividad y votación:**     
   - Desde esta pantalla el jugador ve el tiempo que tiene disponible para intervenir en la actividad, así como dar su voto a alguna de las 3 opciones: "me gusta", "me da igual" o "no me gusta", y luego pasar a la siguiente pregunta clickeando en el botón "Siguiente pregunta".

## Uso

1. Clona el repositorio.
2. Instala node para Angular con `npm install @angular/cli`
3. Instala las dependencias con `npm install`.
    1. @angular/animations
    2. @angular/common
    3. @angular/compiler
    4. @angular/core
    5. @angular/forms
    6. @angular/material
    7. @angular/platform-browser
    8. @angular/platform-browser-dynamic
    9. @angular/router
    10. @ng-bootstrap/ng-bootstrap
    11. bootstrap
    12. font-awesome
    13. jquery
    14. ngx-bootstrap
    15. ngx-cookie-service
    16. ngx-socket-io
    17. ngx-toastr
    18. rxjs
    19. socket.io-client
    20. tslib
    21. zone.js
4. Actualiza las dependencias.
5. Ejecuta la aplicación con `ng serve --o`.
    1. Si quieres acceder desde otros dispositivos, puedes ejecutarlo con `ng serve --host 0.0.0.0` 
6. Abre tu navegador y visita `http://localhost:4000`.


