import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Tipo, Seccion } from '../../model.component';
import { CatalogoService } from '../../catalogo/catalogo.service';

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.css']
})
export class FormTipoComponent {

  @Input() public tip;
  tipo: Tipo;
  formGroup: FormGroup;
  titulo: string;
  categoriaActual: Seccion;

  constructor(private http: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private catalogoService: CatalogoService) {

  }

  ngOnInit() {
    this.categoriaActual = this.catalogoService.getCategoriaActual();
    
    if (this.tip == null) {
      this.titulo = 'Nuevo tipo de ' + this.categoriaActual.txt_nombreSeccion;
      this.createForm();
    }
    else {
      this.titulo = 'Modificar tipo de ' + this.categoriaActual.txt_nombreSeccion;
      this.loadForm();
    }
      
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      tipoID: 0,
      txt_nombreTipo: ['', Validators.required],
      txt_detalleTipo: ['', Validators.required],
      seccionID: this.categoriaActual.seccionID
    });
  }

  private loadForm() {
    console.log(this.tip);
    this.formGroup = this.formBuilder.group({
      tipoID: this.tip.tipoID,
      txt_nombreTipo: this.tip.txt_nombreTipo,
      txt_detalleTipo: this.tip.txt_detalleTipo,
      seccionID: this.tip.seccionID
    });
  }

  private submitForm() {
    this.activeModal.close(this.formGroup.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}




