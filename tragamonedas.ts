import { JuegoDeCasino } from "./juegoDeCasino"

export class TragaMonedas extends JuegoDeCasino {
    id: string;
   

    constructor (apuestaMin:number, apuestaMax:number, cantDeJugadores:number,id: string){
       super(apuestaMin, apuestaMax, cantDeJugadores)
       this.id = id;
      

    }

    getInfo():TragaMonedas{
        return this;
    }
}