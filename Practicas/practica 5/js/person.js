    class person {

    constructor(nombre, apellido1, apellido2) {
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido1() {
        return this._apellido1;
    }

    set apellido1(apellido1) {
        this._apellido1 = apellido1;
    }

    get apellido2() {
        return this._apellido2;
    }

    set apellido2(apellido2) {
        this._apellido2 = apellido2;
    }

    Nombre_Valido() {
        if (this.nombre == null || this.nombre == "" || this.nombre.length > 25)
            return false;
        else
            return true;
    }

    Apellido1_Valido() {
        if (this.apellido1 == null || this.apellido1 == "" || this.apellido1.length > 25)
            return false;
        else
            return true;
    }

    Apellido2_Valido() {
        if (this.apellido2 == null || this.apellido2 == "" || this.apellido2.length > 25)
            return false;
        else
            return true;
    }
/*
    correctAttributes() {
        if (correctName() && correctSurname1() && correctSurname2())
            return true;
        else
            return false;
    }

    toString() {
        let info = "Esta persona se llama: " + this.nombre + " " + this.apellido1 + " " + this.apellido2+ ".";
        return info;
    }*/
}