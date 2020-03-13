import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../../views/contratos/contratos.service';
import { Tipo, Seccion } from '../../model.component';
import { HttpRequest, HttpEventType, HttpClient } from '@angular/common/http';
import { SideNavService } from '../../views/sidenav/sidenav.service';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-form-acta',
  templateUrl: './form-acta.component.html'
})
export class FormActaComponent {
  @Input() acta;
  file: File;
  tiposActa: Tipo[];
  formGroup: FormGroup;
  public progress: number;
  public message: string;
  public titulo: string;
  public actaImgPath: any;

  constructor(private domSanitizer: DomSanitizer, private datePipe: DatePipe,private http: HttpClient, private activeModal: NgbActiveModal, private formBuilder: FormBuilder, private cs: ContratosService, private sidenavService: SideNavService) {
    let tiposActa;
    this.sidenavService.getSeccion('24').subscribe(tiposDesdeWS => tiposActa = tiposDesdeWS, error => console.error(error), () => this.llenarTabla(tiposActa));
  }

  /*ngOnInit() {
    if (this.acta == null) {
      this.titulo = 'Nueva Acta';
      this.createForm();
    }
    else {
      this.titulo = 'Modificar Acta';
      this.updateForm();
    }
  }*/

  ngOnInit() {
    this.createForm();
    if (this.acta != null) {
      const tempActa = _.omit(this.acta, 'txt_archivoActa');
      if (this.acta.txt_archivoActa) {
        this.actaImgPath = this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.acta.txt_archivoActa.replace('C:\\fakepath\\', '/Upload/')
        );
      }
      console.log(this.acta);
      tempActa.ID = tempActa.id;
      tempActa.dt_fechaActa = this.datePipe.transform(this.acta.dt_fechaActa, 'yyyy-MM-dd');
      this.formGroup.patchValue(tempActa);
    }
  }

  llenarTabla(tiposActa: Seccion) {
    this.tiposActa = tiposActa.tipos;
  }

  private createForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      qn_tipoActa: [0, Validators.required],
      txt_codigoActa: ['', Validators.required],
      dt_fechaActa: ['', Validators.required],
      txt_archivoActa: ['', Validators.required],
      dt_fechaUltimoCambio: today,
      contratoID: this.cs.getIdContratoActivo()
    });
  }

  private updateForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: this.acta.id,
      qn_tipoActa: this.acta.qn_tipoActa,
      txt_codigoActa: this.acta.txt_codigoActa,
      dt_fechaActa: this.acta.dt_fechaActa,
      txt_archivoActa: this.acta.txt_archivoActa,
      dt_fechaUltimoCambio: today,
      contratoID: this.acta.contratoID
    }); 
    //this.formGroup.get('dt_fechaActa').setValue(this.datePipe.transform(this.acta.dt_fechaActa, "dd-MM-yyyy"));
    //this.formGroup.get('txt_archivoActa').setValue(this.file, { emitModelToViewChange: true });    
  }
    
  upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/upload`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response)
        this.message = event.body.toString();
    });
  }

  private submitForm() {
    this.activeModal.close(this.formGroup.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}

  


