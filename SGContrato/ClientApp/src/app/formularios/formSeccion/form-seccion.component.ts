import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../../views/contratos/contratos.service';
import { InformesService } from '../../views/informes/informes.service';
import { HttpRequest, HttpEventType, HttpClient } from '@angular/common/http';
import { Seccion } from '../../model.component';
import { CatalogoService } from '../../catalogo/catalogo.service';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.css']
})
export class FormSeccionComponent {

  @Input() public sec;
  seccion: Seccion;
  formGroup: FormGroup;

  constructor(private http: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private catalogoService: CatalogoService) {
    
  }

  ngOnInit() {
    if (this.sec == null)
      this.createForm();
    else
      this.loadForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      seccionID: 0,
      txt_nombreSeccion: ['', Validators.required],
      txt_detalleSeccion: ['', Validators.required],
      bol_estadoSeccion: false,
    });
  }

  private loadForm() {
    console.log(this.sec);
    this.formGroup = this.formBuilder.group({
      seccionID: this.sec.seccionID,
      txt_nombreSeccion: this.sec.txt_nombreSeccion,
      txt_detalleSeccion: this.sec.txt_detalleSeccion

    });
    console.log(this.formGroup.value);
  }

  private submitForm() {
    this.activeModal.close(this.formGroup.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}

