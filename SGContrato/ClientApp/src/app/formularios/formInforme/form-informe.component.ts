import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../../views/contratos/contratos.service';
import { Tipo, Seccion } from '../../model.component';
import { InformesService } from '../../views/informes/informes.service';
import { HttpRequest, HttpEventType, HttpClient } from '@angular/common/http';
import { SideNavService } from '../../views/sidenav/sidenav.service';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-form-informe',
  templateUrl: './form-informe.component.html'
})
export class FormInformeComponent {
  @Input() informe;
  tiposInforme: Tipo[];
  public progress: number;
  public message: string;
  formGroup: FormGroup;
  titulo: string;
  public informeImgPath: any;

  constructor(private datePipe: DatePipe, private domSanitizer: DomSanitizer, private sidenavService: SideNavService, private http: HttpClient, private activeModal: NgbActiveModal, private formBuilder: FormBuilder, private fb: FormBuilder, public cs: ContratosService, public is: InformesService) {
    let seccion
    this.sidenavService.getSeccion('27').subscribe(tiposDesdeWS => seccion = tiposDesdeWS, error => console.error(error), () => this.llenarTabla(seccion));    
  }

  /*ngOnInit() {
    if (this.informe == null) {
      this.titulo = 'Nuevo Informe';
      this.createForm();
    }
    else {
      this.titulo = 'Modificar Informe';
      this.updateForm();
    }
  }*/

  ngOnInit() {
    this.createForm();
    if (this.informe != null) {
      const tempInforme = _.omit(this.informe, 'txt_archivoInforme');
      if (this.informe.txt_archivoInforme) {
        this.informeImgPath = this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.informe.txt_archivoInforme.replace('C:\\fakepath\\', '/Upload/')
        );
      }
      console.log(this.informe);
      tempInforme.ID = tempInforme.id;
      tempInforme.dt_fechaInforme = this.datePipe.transform(this.informe.dt_fechaInforme, 'yyyy-MM-dd');
      this.formGroup.patchValue(tempInforme);
    }
  }

  llenarTabla(seccion: Seccion) {
    this.tiposInforme = seccion.tipos;
  }

  private createForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      qn_tipoInforme: [0, Validators.required],
      txt_codigoInforme: ['', Validators.required],
      dt_fechaInforme: ['', Validators.required],
      txt_archivoInforme: ['', Validators.required],
      dt_fechaUltimoCambio: today,
      contratoID: this.cs.getIdContratoActivo()
    });
  }

  private updateForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: this.informe.id,
      qn_tipoInforme: this.informe.qn_tipoInforme,
      txt_codigoInforme: this.informe.txt_codigoInforme,
      dt_fechaInforme: this.informe.dt_fechaInforme,
      txt_archivoInforme: this.informe.txt_archivoInforme,
      dt_fechaUltimoCambio: today,
      contratoID: this.informe.contratoID
    });
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
