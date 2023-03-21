export class JuegoDeCasino{
       
       apuestaMin:number;
       apuestaMax:number;
       cantDeJugadores:number;

       constructor ( apuestaMin:number, apuestaMax:number, cantDeJugadores:number){
        this.apuestaMin = apuestaMin;
        this.apuestaMax = apuestaMax;
        this.cantDeJugadores = cantDeJugadores;
       }

       getInfo(): JuegoDeCasino{
              return this;
       }
}