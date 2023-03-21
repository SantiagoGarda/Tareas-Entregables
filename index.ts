import { Casino } from "./casino";
import { JuegoDeCasino } from "./juegoDeCasino";
import { TragaMonedas } from "./tragamonedas";
import { Ruleta } from "./ruleta";


let ruleta1 = new Ruleta(5,500,10,1)
let tragaMonedas1 = new TragaMonedas (50,1000,20,"Mesa 1")
let casinoJuarez = new Casino ("Casino Benito Juarez,","Av. Libertad 23,", 5000, tragaMonedas1, ruleta1, )







