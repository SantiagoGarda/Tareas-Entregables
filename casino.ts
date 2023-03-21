import { TragaMonedas } from "./tragamonedas"
import { Ruleta } from "./ruleta"


export class Casino {
    nombreDeCasino : string;
    ubicacion: string;
    cantDeHabitaciones : number;
    tragaMonedas: TragaMonedas;
    ruleta: Ruleta;
    
    
    

    constructor(nombreDeCasino : string, ubicacion: string, cantDeHabitaciones : number,tragaMonedas: TragaMonedas,ruleta: Ruleta){
        this.nombreDeCasino = nombreDeCasino;
        this. ubicacion = ubicacion;
        this.cantDeHabitaciones = cantDeHabitaciones;
        this.tragaMonedas = tragaMonedas;
        this.ruleta = ruleta;

    }

    getInfo(): Casino {
        return this;
    }
}