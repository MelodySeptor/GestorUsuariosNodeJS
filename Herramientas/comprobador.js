require('./dataBase')
class Comprobador{
    constructor(){

    }

    /**
     * Comprueba que el contenido del campo Email sea correcto.
     * Se comprueba el formato.
     * @param {String} contenido 
     */
    compruebaCampoEmail(contenido){
        return contenido.indexOf("@") < contenido.lastIndexOf(".")
    }

    /**
     * Comprueba si el nombre de usuario y la contraseña
     * son correctos. De momento se hará de forma sincrona.
     * @param {String} usuario 
     * @param {String} contrasenya 
     * @param {DataBase} dataBase
     */
    compruebaUsuario(usuario, contrasenya, dataBase){
        //Se conecta a la base de datos y mira si
        //la combinacion usuario-contrasenya es correcta.
        dataBase.estableceConexion();
        peticion = dataBase.crearPeticionEstandar(usuario);

        return dataBase.existeUsuario(peticion, contrasenya)
    }

    compruebaCampoContrasenya(contenido){
        return true;
    }
}