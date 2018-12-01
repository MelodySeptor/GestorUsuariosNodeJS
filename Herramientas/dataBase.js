class DataBase{
    constructor(){
    }

    set dataBaseName(name){
        this._dataBaseName = name;
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    set contrasenya(contrasenya){
        this._contrasenya = contrasenya;
    }

    set host(host){
        this._host = host;
    }

    get datosConexion(){
        return [this._usuario, this._contrasenya, this._host];
    }

    /**
     * Establece la conexión de la base de datos.
     */
    estableceConexion(){

    }

    /**
     * Devuelve una query estandar para saber si el usuario-contrasenya
     * existe en la base de datos.
     * @param {String} usuario 
     * @param {String} contrasenya 
     */
    crearPeticionEstandar(usuario){
        return "SELECT "+usuario+" FROM "+this._dataBaseName;
    }

    /**
     * Realiza una query para saber si existe un usuario con la contrasenya dada.
     * @param {String} query 
     */
    existeUsuario(query, contrasenya){
        return true;
    }
}