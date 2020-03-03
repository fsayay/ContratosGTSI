import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato, Vencimiento, Historial } from '../../model.component';
import { HistorialService } from '../historial/historial.service';
import { FormGroup } from '@angular/forms';
import { VencimientosService } from './vencimientos.service';
import { ContratosService } from '../contratos/contratos.service';


@Component({
    selector: 'app-vencimientos',
    templateUrl: './vencimientos.component.html',
    styleUrls: ['./vencimientos.component.css']
})
export class VencimientosComponent {

  public vencimientos: Vencimiento[];
  public contrato: Contrato;
  public nuevoVencimiento: Vencimiento;
  public editVencimiento: Vencimiento;
  public historial: Historial;
  public formHistorial: FormGroup;

  constructor(private contratosService: ContratosService, private historialService: HistorialService, private vencimientoService: VencimientosService) { }

  ngOnInit() {
    this.vencimientoService.getVencimientos(this.contratosService.getIdContratoActivo()).subscribe(vencimientosDesdeWS => this.contrato = vencimientosDesdeWS, error => console.error(error), () => this.cargarDatos());
  }

  cargarDatos() {
    console.log(this.contrato);
    this.vencimientos = this.contrato.vencimientos;
    console.log(this.vencimientos);
  }




}
