# Proyecto Final Equipo 4

## Participantes
- Benitez, Lucas
- Castro, Ricardo
- Iglesias, José Manuel
- Seara, Amanda

## Funcionalidades y sus características

1. **Pantalla de Inicio:**
   - Usando los botones "signup" y "login" de la barra de navegación de la pantalla de inicio es posible registrar un administrador (signup), logear un administrador (login), o desde los botones centrales un jugador puede unirse a una partida con el botón "unirse" o mediante el botón "crear", acceder a la pantalla nueva sala (new-room).

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
   - Desde esta pantalla el administrador puede ver un listado de las propuestas disponibles para elegir, al clickear en la porpuesta deseada, lo lleva la pantalla de esa propuesta concreata, pudiendo ver las actividades que la componen. También puede ver el botón para crear más actividades así como el botón para crear más propuestas.

5. **Creación de Propuestas:**
   - Permite a los usuarios admin crear nuevas propuestas, pudiendo darle un nombre a la propuesta, seleccionar de una lista las actividades predefinidas o utilizando el botón "Add Activities" agregar nuevas actividades para ser incluidas. Una vez que la propuesta esta definida, se puede guardar con el botón "save proposal".

6. **Listado de actividades:**
   - Permite al usuario admin ver todas las actividades disponibles y seleccionar una clickeando en el botón "go" que se incluye en cada una.
   - El usuario con role admin, puede clickear en la "ruedíta" en la esquina superior derecha de la tarjeta corresponndiete a una actividad, accediendo a la pantalla de modificación de la actividad.

7. **ABM de actividades:**
   - La pantalla de alta, baja y modificación de actividades permite realizar estas tareas de mantenimiento en cualquier actividad.

8. **Join de jugadores:**
   - Desde esta pantalla los jugadores podrán ingresar con su nombre de usuario y con el código de la room a la que se quieran unir, la cual contiene la propuesta a ser jugada.

9. **Sala de espera jugador:**
   - Desde esta pantalla los jugadores esperan a que el admin inicie la propuesta de la room para ingresar a las actividades.

10. **Sala de espera admin 1:**
- Desde esta pantalla el admin puede ver el código de la room, la cantidad de usuarios en esa room y también puede enviar un mensaje a dicha room, para iniciar la propuesta.

11. **Sala de espera admin 2:**
- En esta pantalla el admin espera a que los jugadores terminen las votaciones, para poder mostrar los resultados.

12. **Pantalla de juego en actividad y votación:**     
   - Desde esta pantalla el jugador ve el tiempo que tiene disponible para intervenir en la actividad, así como dar su voto a alguna de las 3 opciones: "me gusta", "me da igual" o "no me gusta", y luego pasar a la siguiente pregunta clickeando en el botón "Siguiente pregunta".

13. **Pantalla de resultados:**
- Desde esta pantalla, luego de que todos los jugadores hayan termiado de votar todas las actividades, se pueden visualizar tanto el nombre de todas las actividades de la room como la cantidad de votos, ya sea me gusta, me da igual o no me gusta, de cada actividad.   

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
6. Abre tu navegador y visita `http://localhost:4200`.


