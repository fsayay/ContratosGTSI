import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contrato, Tipo, Seccion, User } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { Router } from '@angular/router';
import { CatalogoService } from '../../catalogo/catalogo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public contratos: Contrato[];
  public contratosFiltrados: Contrato[]=[];
  public formGroup: FormGroup;
  public tipoContrato: Tipo[];
  public estado: Tipo[];
  seccionContrato: Seccion;
  seccionEstado: Seccion;
  usuario: User;

  constructor(private formBuilder: FormBuilder,
    private catalogoService: CatalogoService, private datePipe: DatePipe,
    private contratosService: ContratosService, private router: Router) {
    let estadoContrato;
    this.catalogoService.getSec('1').subscribe(tiposDesdeWS => estadoContrato = tiposDesdeWS, error => console.error(error), () => this.llenarTabla(estadoContrato));
  }

  ngOnInit() {
    this.createForm();
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.usuario[0].nombreRol == "Administrador-Contrato") {
      this.contratosService.getContratosAdmin(this.usuario[0].id).subscribe((data: any) => this.contratos = data);
    } else {
      this.contratosService.getContratos().subscribe((data: any) => this.contratos = data);
    }
  }
   
  llenarTabla(estado: Seccion) {
    this.tipoContrato = estado.tipos;
    this.catalogoService.getSec('23').subscribe(tiposDesdeWS => this.seccionEstado = tiposDesdeWS, error => console.error(error), () => this.llenarDatos());
  }

  llenarDatos() {
    this.estado = this.seccionEstado.tipos;
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      codigoContrato: [''],
      adminContrato: [''],
      estadoContrato: ['', Validators.required],
      codigoProceso: [''],
      proveedor: [''],
      tipoContrato: [''],
      fechaSubs1: ['', Validators.required],
      fechaSubs2: ['', Validators.required],
      fechaInicio1: [''],
      fechaInicio2: [''],
      fechaFin1: [''],
      fechaFin2: ['']
    });
  }

  private submitForm() {
    console.log(this.formGroup.get('estadoContrato').value);
    this.filtrar();
  }

  mostrarDetalle(contratoId: string) {
    this.contratosService.setContratoId(contratoId);
    this.router.navigate(["/DatosGenerales"]);
  }

  mostrarHistorial(contratoId: string) {
    this.contratosService.setContratoId(contratoId);
    this.router.navigate(["/Historial"]);
  }

  filtrar() {
    this.contratosFiltrados = [];
    this.contratos.forEach(x => {
      if (x.qn_estadoContrato == this.formGroup.get('estadoContrato').value) {
        this.contratosFiltrados.push(x);
        var fechaSub1 = new Date(this.datePipe.transform(this.formGroup.get('fechaSubs1').value, "yyyy-MM-dd"));
        var fechaSub2 = new Date(this.datePipe.transform(this.formGroup.get('fechaSubs2').value, "yyyy-MM-dd"));
        let d1 = fechaSub1.getTime(); console.log(d1);
        let d2 = fechaSub2.getTime(); console.log(d2);
        this.contratosFiltrados.forEach(y => {
          let d3 = (new Date(y.dt_fechaSuscripcion)).getTime(); console.log(d3);
          if (d3 < d1 || d3 > d2) {
            var i = this.contratosFiltrados.indexOf(y);
            i !== -1 && this.contratosFiltrados.splice(i, 1);
          }
        });
      }
    });
    // por Proveedor
    
    console.log(this.formGroup.value);
    if (this.formGroup.get('proveedor').value != "") {
      this.contratosFiltrados.forEach(x => {
        if (x.txt_nombreProveedor != this.formGroup.get('proveedor').value) {
          var i = this.contratosFiltrados.indexOf(x);
          i !== -1 && this.contratosFiltrados.splice(i, 1);
        }
      });
    }

    // por Cod

    console.log(this.formGroup.value);
    if (this.formGroup.get('codigoContrato').value != "") {
      this.contratosFiltrados.forEach(x => {
        if (x.txt_codigoContrato != this.formGroup.get('codigoContrato').value) {
          var i = this.contratosFiltrados.indexOf(x);
          i !== -1 && this.contratosFiltrados.splice(i, 1);
        }
      });
    }
  }

}
