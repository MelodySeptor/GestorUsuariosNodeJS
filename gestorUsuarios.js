require('./Herramientas/comprobador.js');
require('./Herramientas/dataBase.js');

class GestorUsuarios{
    /**
     * Constructor.
     */
    constructor(){
        this._comprobador = new Comprobador();
    }

    /**
     * Se encarga de logear un usuario, en el caso que se haga
     * correctamente devuelve True, sino False.
     * @param {String} campoUsuario 
     * @param {String} campoContrasenya 
     * @param {DataBase} dataBase
     */
    loginUser(campoUsuario, campoContrasenya, dataBase){
        if(this._comprobador.compruebaCampoEmail(campoUsuario)){
            if(this._comprobador.compruebaUsuario(campoUsuario, campoContrasenya, dataBase)){
                return true;
            }
        }
        return false;
    }

    registerUser(){
        return true;

    }

    /**
     * Recoje todos los parametros necesarios
     * para setear la base de datos.
     * @param {DataBase} dataBase 
     * @param {String} usuario 
     * @param {String} contrasenya 
     * @param {String} host 
     * @param {String} nameDatabase
     */
    setupDataBase(dataBase, usuario, contrasenya, host, nameDatabase){
        dataBase.usuario = usuario;
        dataBase.contrasenya = contrasenya;
        dataBase.host = host;
        dataBase.dataBaseName = nameDatabase;
    }

    /**
     * Retorna un objeto de GestorUsuarios, para más tarde usarlo como thread.
     * @returns {GestorUsuarios} object
     */
    getInstance(){
        return new GestorUsuarios();
    }
}