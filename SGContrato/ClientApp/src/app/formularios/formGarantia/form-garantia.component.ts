import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../../views/contratos/contratos.service';
import { Tipo, Seccion } from '../../model.component';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { SideNavService } from '../../views/sidenav/sidenav.service';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { isEmpty } from 'rxjs/operators';


@Component({
  selector: 'app-form-garantia',
  templateUrl: './form-garantia.component.html'
})
export class FormGarantiaComponent {

  @Input() garantia;

  public tiposGarantia: Tipo[];
  public formGroup: FormGroup;
  public titulo: string = "Nueva Garantia";
  public value = '0';
  public tempFile: any;
  public garantiaImgPath: any;
  public progress: number;
  public message: string;
  public nombreArchivo = "";

  constructor(
    private datePipe: DatePipe,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private cs: ContratosService,
    private sidenavService: SideNavService)
  {
    let seccion;
    this.sidenavService.getSeccion('2').subscribe(tiposDesdeWS => {
      seccion = tiposDesdeWS;
      this.tiposGarantia = seccion.tipos;
    }, error => console.error(error));
  }
 
  ngOnInit() {
    this.createForm();
    console.log(this.nombreArchivo);
    if (this.garantia != null) {
      this.titulo = "Modificar Garantia";
      const tempGarantia = this.garantia;      
      tempGarantia.ID = tempGarantia.id;
      tempGarantia.dt_inicioGarantia = this.datePipe.transform(this.garantia.dt_inicioGarantia, 'yyyy-MM-dd');
      tempGarantia.dt_finGarantia = this.datePipe.transform(this.garantia.dt_finGarantia, 'yyyy-MM-dd');
      tempGarantia.txt_archivoGarantia = "";
      this.value = tempGarantia.vm_valorGarantia;
      this.formGroup.patchValue(tempGarantia);
      console.log(this.formGroup.value);
    }
  }

  llenarTabla(seccion: Seccion) {
    this.tiposGarantia = seccion.tipos;
  }

  private createForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      qn_tipoGarantia: [0, Validators.required],
      vm_valorGarantia: [0, Validators.required],
      txt_codigoGarantia: ['', Validators.required],
      txt_proveedorGarantia: ['', Validators.required],
      dt_inicioGarantia: ['', Validators.required],
      dt_finGarantia: ['', Validators.required],
      txt_archivoGarantia: ['', Validators.required],
      dt_fechaUltimoCambio: today,
      contratoID: this.cs.getIdContratoActivo()
    });
  }

  get codigo() { return this.formGroup.get('txt_codigoGarantia'); }
  get valor() { return this.formGroup.get('vm_valorGarantia'); }
  get proveedor() { return this.formGroup.get('txt_proveedorGarantia'); }
  get fechaIni() { return this.formGroup.get('dt_inicioGarantia'); }
  get fechaFin() { return this.formGroup.get('dt_finGarantia'); }
  get archivo() { return this.formGroup.get('txt_archivoGarantia'); }

  selectFile(files) {
    if (files.length === 0)
      return;
    this.tempFile = files;
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

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const fileReader = new FileReader();
      const [file] = event.target.files;
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        this.tempFile = {
          original: file,
          result: fileReader.result
        };
        this.formGroup.get('txt_archivoGarantia').patchValue({
          txt_archivoGarantia: file
        });
      };
    }
  }
  
  private submitForm() {
    this.upload(this.tempFile);
    this.activeModal.close(this.formGroup.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
