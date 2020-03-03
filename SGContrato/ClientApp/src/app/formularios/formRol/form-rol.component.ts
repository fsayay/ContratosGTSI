import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequest, HttpEventType, HttpClient } from '@angular/common/http';
import { Rol } from '../../model.component';
import { CatalogoService } from '../../catalogo/catalogo.service';

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css']
})
export class FormRolComponent implements OnInit {

  @Input() public rol1;
  rol: Rol;
  formGroup: FormGroup;

  constructor(private http: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private catalogoService: CatalogoService) {

  }

  ngOnInit() {
    if (this.rol1 == null)
      this.createForm();
    else
      this.loadForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      ID: 0,
      txt_rolName: ['', Validators.required],
      txt_rolDetaile: ['', Validators.required]
    });
  }

  private loadForm() {
    this.formGroup = this.formBuilder.group({
      ID: this.rol1.id,
      txt_rolName: this.rol1.txt_rolName,
      txt_rolDetaile: this.rol1.txt_rolDetaile
    });
  }

  private submitForm() {
    this.activeModal.close(this.formGroup.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}




