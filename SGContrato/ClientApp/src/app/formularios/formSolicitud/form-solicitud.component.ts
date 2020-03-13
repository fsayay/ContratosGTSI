import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Seccion } from '../../model.component';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  @Input() cantContratos: number;
  public formGroup: FormGroup;
  @ViewChild("formAdm", { static: false }) formAdm: ElementRef;
  @ViewChild("formDes", { static: false }) formDes: ElementRef;

  estadosSolicitud: Seccion;

  user: any;
  admin: any;
  uas: any;

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private renderer: Renderer2,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  elegirAdministrador() {
    const modalRef = this.modalService.open(FormUserComponent);
    modalRef.componentInstance.user = 'Administrador-Contrato'; // should be the id
    modalRef.result.then((result) => {
      this.user = result;
      this.formGroup.get('txt_admRecomendado').setValue(this.user.nombre + ' ' +this.user.apellido);
      //this.renderer.addClass(this.formUsuario.nativeElement, "disabled");
      this.renderer.setAttribute(this.formAdm.nativeElement, 'value', this.user.nombre + this.user.apellido );
    }).catch((error) => {
      console.log(error);
    });
  }

  elegirDestinatario() {
    const modalRef = this.modalService.open(FormUserComponent);
    modalRef.componentInstance.user = 'Usuario-UAS'; // should be the id
    modalRef.result.then((result) => {
      this.user = result;
      this.formGroup.get('qn_usuarioUAS').setValue(this.user.id);
      //this.renderer.addClass(this.formUsuario.nativeElement, "disabled");
      this.renderer.setAttribute(this.formDes.nativeElement, 'value', this.user.nombre + this.user.apellido);
    }).catch((error) => {
      console.log(error);
    });
  }

  private createForm() {

    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      txt_codigoSolicitud: parseInt(today.toString()),
      qn_cantContratos: this.cantContratos,
      txt_motivoSolicitud: ['', Validators.required],
      txt_admRecomendado: ['', Validators.required],
      qn_usuarioUAS: ['', Validators.required],
      qn_estadoSolicitud: 1,
      dt_fechaUltimoCambio: today,
      UserID: '0'
    });
  }
  
  private submitForm() {
    this.cantContratos = 0;
    this.activeModal.close(this.formGroup.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
