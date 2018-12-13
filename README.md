# Gestor Usuarios en NodeJS
## Proposito
El proposito de este repositorio es crear unos archivos de ayuda para realizar el login o el registro de un usuario con NodeJS. La idea es no tener que implementarlo cada vez que se desea crear una aplicación.

## Como usarlo
Se debe poner el objeto dentro de la sesión del usuario, de esta forma, aunque tenga 30 peticiones cada una de ellas tendra su propia estructura de datos.

## To-Do
    - [ ] Realizar conexión con Base de datos para el login.
        - [x] Pensar forma de setear los datos de la base de datos.
        - [ ] Implementar Login con base de datos.
        - [ ] Hacer test de la función de login.

    - [ ] Realizar el registro.
        - [ ] Pensar todos los elementos a comprobar en el registro.
        - [ ] Implementar las funciones necesarias para la comprobación.
        - [x] Pensar forma de setear los datos de la base de datos.
        - [ ] Si fallan cosas ha de devolver mediante la sesion un objeto con los errores.
        - [ ] Hacer test de la función registro.
    
    - [ ] Database
        - [x] Setear datos.
        - [ ] Encontrar sitio para el servicio.
        - [ ] Implementar todos los metodos.
        - [ ] Hacer test de multiples conexiones a la vez y del funcionamiento.

## Funciones
```javascript
    function(){
        console.log("hello")
    }
```