import { JuegoDeCasino } from "./juegoDeCasino"

export class Ruleta extends JuegoDeCasino {
    numeroDeMesa:number;
    

    constructor(apuestaMin:number, apuestaMax:number, cantDeJugadores:number, numeroDeMesa:number){
        super(apuestaMin, apuestaMax, cantDeJugadores)
        this.numeroDeMesa = numeroDeMesa;
        
        
    }


    getInfo(): Ruleta{
        return this;
    }


}