require('./Herramientas/comprobador.js');

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
     */
    loginUser(campoUsuario, campoContrasenya){
        if(this._comprobador.compruebaCampoEmail(campoUsuario)){
            if(this._comprobador.compruebaUsuario(campoUsuario, campoContrasenya)){
                return true;
            }
        }
        return false;
    }

    registerUser(){
        return true;

    }
}