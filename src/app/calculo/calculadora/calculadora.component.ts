import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  //  Valores-obtenidos
   valor1!:number
   valor2!:number
   num_valor= 0
  //  Operaciones-matematicas
   suma =0
   resta = 0
   multipicacion = 0
   division = 0
   operaciones(){
    this.suma = this.valor1+this.valor2 
    this.resta = this.valor1 - this.valor2
    this.multipicacion = this.valor1 * this.valor2
    this.division = this.valor1/this.valor2

   }
}
