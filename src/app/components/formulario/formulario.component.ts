import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  dias = 25;
  salarioMensual = 0;
  salarioDiario = 0;
  aguinaldo = 0;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDias(event: any) {
    this.dias = event.target.value;
    this.calcularSalarioDiario();
  }

  calcularSalarioDiario() {
    this.salarioDiario = this.salarioMensual / 30;
  }

  calcularAguinaldo() {
    this.aguinaldo = this.salarioDiario * this.dias;
    console.log(this.aguinaldo);
    //const BMI = this.altura / Math.pow((this.altura / 100),2);
    //this.router.navigate(['/resultado',BMI.toFixed(1)]);
  }

}
