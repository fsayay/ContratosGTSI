import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tipo, Seccion, Contrato } from '../../model.component';
import { SideNavService } from '../../views/sidenav/sidenav.service';
import { ContratosService } from '../../views/contratos/contratos.service';
import { DatePipe, formatCurrency, getCurrencySymbol } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modificacion-dialog',
  templateUrl: './modificacion-dialog.component.html',
  styleUrls: ['./modificacion-dialog.component.css']
})
export class ModificacionDialogComponent implements OnInit {
  contrato: Contrato;
  seccion: Seccion;
  formGroup: FormGroup;
  tiposModificacion: Tipo[];
  titulo: string;
  cantidad: string='0';
  disabled = false;

  constructor(private cs: ContratosService,
    private sidenavService: SideNavService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModificacionDialogComponent>, @Inject(MAT_DIALOG_DATA) data,
    private datePipe: DatePipe,
    private domSanitizer: DomSanitizer) {
    let seccion;
    this.sidenavService.getSeccion('26').subscribe(tiposDesdeWS => seccion = tiposDesdeWS, error => console.error(error), () => this.llenarTabla(seccion));
  }

  ngOnInit() {   
    this.titulo = 'Nueva Modificacion del Contrato';
    this.createForm();
  }
  
  llenarTabla(seccion: Seccion) {
    this.tiposModificacion = seccion.tipos;
    this.cs.getContrato(this.cs.getIdContratoActivo()).subscribe(contratoDesdeWS => this.contrato = contratoDesdeWS, error => console.error(error), () => this.cargarPagina());
  }

  cargarPagina() {
    console.log(this.contrato);
    this.formGroup.get('vm_valorAnterior').setValue(formatCurrency(this.contrato.vm_montoAdjudicado, 'en-US', getCurrencySymbol('USD', 'wide')));
    this.formGroup.get('dt_fechaAnterior').setValue(this.datePipe.transform(this.contrato.dt_fechaFin, "yyyy-MM-dd"));
  }

  private createForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      qn_tipoModificacion: [0, Validators.required],
      txt_motivoModificacion: ['', Validators.required],
      dt_fechaUltimoCambio: today,
      vm_valorAnterior: '',
      vm_valorActual: this.cantidad,
      dt_fechaAnterior: '',
      dt_fechaActual: ['', Validators.required],
    });
  };  

  updateValue(value: string) {
    let val = parseInt(value, 10);
    if (Number.isNaN(val)) {
      val = 0;
    }
    this.cantidad = formatCurrency(val, 'en-US', getCurrencySymbol('USD', 'wide'));
  }

  save() {
    this.formGroup.get('dt_fechaActual').setValue(this.datePipe.transform(this.formGroup.get('dt_fechaActual').value, "yyyy-MM-dd"));
    this.formGroup.get('vm_valorAnterior').setValue(this.contrato.vm_montoAdjudicado);
    this.dialogRef.close(this.formGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

}
