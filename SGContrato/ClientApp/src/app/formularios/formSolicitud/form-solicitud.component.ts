import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User, Solicitud, Tipo, Seccion } from '../../model.component';
import { FormUserComponent } from '../form-user/form-user.component';
import { CatalogoService } from '../../catalogo/catalogo.service';

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

  user: User;

  constructor(private catalogoService: CatalogoService, private http: HttpClient, private modalService: NgbModal, private activeModal: NgbActiveModal, private renderer: Renderer2, private formBuilder: FormBuilder) {
    
  }
  ngOnInit() {
    this.createForm();
  }

  elegirAdministrador() {
    const modalRef = this.modalService.open(FormUserComponent);
    modalRef.componentInstance.user = null; // should be the id
    modalRef.result.then((result) => {
      this.user = result;
      this.formGroup.get('txt_admRecomendado').setValue(this.user.txt_username);
      //this.renderer.addClass(this.formUsuario.nativeElement, "disabled");
      this.renderer.setAttribute(this.formAdm.nativeElement, 'value', this.user.txt_username);
    }).catch((error) => {
      console.log(error);
    });
  }

  elegirDestinatario() {
    const modalRef = this.modalService.open(FormUserComponent);
    modalRef.componentInstance.user = null; // should be the id
    modalRef.result.then((result) => {
      this.user = result;
      this.formGroup.get('txt_destinatario').setValue(this.user.txt_username);
      //this.renderer.addClass(this.formUsuario.nativeElement, "disabled");
      this.renderer.setAttribute(this.formDes.nativeElement, 'value', this.user.txt_username);
    }).catch((error) => {
      console.log(error);
    });
  }

  private createForm() {

    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      txt_codigoSolicitud: today.toString,
      qn_cantContratos: this.cantContratos,
      txt_motivoTransferencia: ['', Validators.required],
      txt_admRecomendado: ['', Validators.required],
      qn_estadoSolicitud: 1,
      dt_fechaUltimoCambio: today,
      UserID: '1'
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
