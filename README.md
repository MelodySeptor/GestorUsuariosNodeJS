# Gestor Usuarios en NodeJS
## Proposito
El proposito de este repositorio es crear unos archivos de ayuda para realizar el login o el registro de un usuario con NodeJS. La idea es no tener que implementarlo cada vez que se desea crear una aplicación.

## To-Do
    - [ ] Realizar conexión con Base de datos para el login.
        - [ ] Pensar forma de setear los datos de la base de datos.
        - [ ] Implementar Login con base de datos.
        - [ ] Hacer test de la función de login.

    - [ ] Realizar el registro.
        - [ ] Pensar todos los elementos a comprobar en el registro.
        - [ ] Implementar las funciones necesarias para la comprobación.
        - [ ] Pensar forma de setear los datos de la base de datos.
        - [ ] Si fallan cosas ha de devolver mediante la sesion un objeto con los errores.
        - [ ] Hacer test de la función registro.
    
    - [ ] General.
        - [ ] Las funciones no deben devolver true o false, se debe almacenar en la sesion de cada usuario para que no haya problemas.
        - [ ] [Alternativa] hacer threads para cada conexion, pero puede llegar a ser inviable.

## Funciones