import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../../views/contratos/contratos.service';
import { Tipo, Seccion, Contrato } from '../../model.component';
import { HttpClient } from '@angular/common/http';
import { PagosService } from '../../views/pagos/pagos.service';
import { SideNavService } from '../../views/sidenav/sidenav.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DatePipe, formatCurrency, getCurrencySymbol } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pagos-dialog',
  templateUrl: './pagos-dialog.component.html',
  styleUrls: ['./pagos-dialog.component.css']
})

export class PagosDialogComponent implements OnInit {

  public titulo: string;
  public contrato: Contrato;
  public formaPagoID: number;
  public tiposPago: Tipo[];
  public formGroup: FormGroup;
  public cantidad: string = '0';
  public sumaTotal = 0;

  constructor(private dialogRef: MatDialogRef<PagosDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private datePipe: DatePipe, private domSanitizer: DomSanitizer, private sidenavService: SideNavService, private http: HttpClient, private activeModal: NgbActiveModal, private pagosService: PagosService, private formBuilder: FormBuilder, private contratosService: ContratosService) {
    let seccion;
    this.sidenavService.getSeccion('21').subscribe(tiposDesdeWS => seccion = tiposDesdeWS, error => console.error(error), () => this.llenarTabla(seccion));
  }

  ngOnInit() {
    this.titulo = 'Forma de Pago';
    this.contrato = JSON.parse(localStorage.getItem('contratoActivo'));
    console.log(this.contrato);
    this.createForm();
  }

  llenarTabla(seccion: Seccion) {
    this.tiposPago = seccion.tipos;
  }

  private createForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      qn_tipoPago: [0, Validators.required],
      dt_fechaUltimoCambio: today,
      contratoID: this.contratosService.getIdContratoActivo(),
      pagos: this.formBuilder.array([])
    });
  }

  setTipoPago(tipo: Tipo) {
    if (tipo.txt_nombreTipo == "Contra Entrega") {
      this.cantidad = '100';
    }
  }
  
  agregarPago() {
    if (this.sumaTotal - this.contrato.vm_montoAdjudicado != 0) {
      let pagoArr = this.formGroup.get('pagos') as FormArray;
      let pagoFormGroup = this.construirFormPago();
      pagoFormGroup.get('vm_montoPago').valueChanges.subscribe(changed => {
        this.sumaTotal = this.sumaTotal + changed;
        pagoFormGroup.get('qn_porcentajePago').patchValue({ qn_porcentajePago: changed / this.contrato.vm_montoAdjudicado * 100 });
      })
      pagoArr.push(pagoFormGroup);
    }
  }


/*
  agregarPago() {
    const contrato = this.contratosService.getContratoInstance();
    if (this.sumaTotal - contrato.vm_montoAdjudicado != 0) {
      let pagoArr = this.formGroup.get('pagos') as FormArray;
      let pagoFormGroup = this.construirFormPago();
      pagoFormGroup.get('vm_montoPago').valueChanges.subscribe(changed => {
        this.sumaTotal = this.sumaTotal + changed;
        pagoFormGroup.get('qn_porcentajePago').patchValue({ qn_porcentajePago: changed / contrato.vm_montoAdjudicado * 100 });
      })
      pagoArr.push(pagoFormGroup);
    }
*/


  construirFormPago() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    return this.formBuilder.group({
      ID: 0,
      qn_porcentajePago: [0, Validators.required],
      bol_esAnticipo: false,
      vm_montoPago: [0, Validators.required],
      dt_tentativaPago: ['', Validators.required],
      dt_realPago: today,
      txt_comprobantePago: null,
      dt_fechaUltimoCambio: today,
      formaPagoID: 0
    })
  }

  updateValue(value: string) {
    console.log(value);
    let val = parseInt(value, 10);
    console.log(val);
    if (Number.isNaN(val)) {
      val = 0;
      console.log(val);
    }
    if (val > 100) {
      console.log(val);
      val = 0;
      console.log(val);
    } else {
      val = val / 100;
    }
    console.log(val);
    this.cantidad = val.toString();
  }

  save() {    
    this.dialogRef.close(this.formGroup.value);
  }

  close() {
    this.dialogRef.close();
  }
}
