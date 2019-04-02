
export class Puerta{
    tamaño: string;
    ventana: string;
    tipoMaterial: string;

}
export class Rueda{
    color: string;
    Neumático: string;
    Tamaños: string;
}
export class Motor{
    caballosDeFuerza: number;
    velMax: number;
}

export class Auto {
        puertas : Puerta[];
        ruedas : Rueda;
        motores : Motor;
        modelo: string;
    }


/*

export class Auto {
        puertas : Puerta;
        ruedas : Rueda;
        motores : Motor;
        constructor() {
            this.motores = new Motor();
            this.puertas = new Puerta();
            this.ruedas = new Rueda();
        }
    }




export class Puerta{
    tamaño: string;
}
export class Rueda{
    color: string;
}
export class Motor{
    caballosDeFuerza: number;
}

export class Partes{
    Puertas: Puerta;
    Ruedas: Rueda;
    CabFuer: Motor;
}



export class Parts{
    door:{
        color: string;
    };
    wheel: {
        size: string;
    };
    engine:{
        horsePower: number;
    }
}



export class Partes{
    Puerta:{ tamaño: string};
    Rueda:{ color: string};
    Motor:{ CabFuerz: number};
}

*/