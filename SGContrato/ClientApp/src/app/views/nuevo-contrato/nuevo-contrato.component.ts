import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Tipo, Contrato, Seccion, User } from '../../model.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { ContratosService } from '../contratos/contratos.service';
import { Router } from '@angular/router';
import { SideNavService } from '../sidenav/sidenav.service';
import { FormUserComponent } from '../../formularios/form-user/form-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DatePipe, formatCurrency, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-nuevo-contrato',
  templateUrl: './nuevo-contrato.component.html',
  styleUrls: ['./nuevo-contrato.component.css']
})

export class NuevoContratoComponent implements OnInit {

  public progress: number;
  public message: string;
  public tiposContrato: Tipo[];
  public tiposProceso: Tipo[];
  public formGroup: FormGroup;
  public unidades: any;
  public tempFile: FileList;
  public usuario: any;
  public user: any;
  public nombreArchivo: string = '';
  public contrato: Contrato;
  public value = '0';

  @ViewChild("descripcion", { static: false }) descripcion: ElementRef;
  @ViewChild("email", { static: false }) email: ElementRef;
  @ViewChild("admin", { static: false }) admin: ElementRef;

  constructor(
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private renderer: Renderer2,
    private sidenavService: SideNavService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private contratosService: ContratosService,
    private router: Router,
    private toastr: ToastrService)
  {

    this.unidades =
      [
      {
        id: '1',
        ID: '1',
        nombre: 'FICT',
        descripcion: 'Unidad especializada en la compra de equipos para excavacion',
        email: 'fict@espol.edu.ec'
      },
      {
          id: '2',
          ID: '2',
          nombre: 'FIEC',
          descripcion: 'Unidad especializada en la compra de equipos tecnologicos',
          email: 'fiec@espol.edu.ec'
        }
        
      ];
    let seccion;
    let seccion2;
    this.sidenavService.getSeccion('1').subscribe(tiposDesdeWS => {
      seccion = tiposDesdeWS;
      this.tiposContrato = seccion.tipos;
      this.sidenavService.getSeccion('3').subscribe(tiposDesdeWS => {
        seccion2 = tiposDesdeWS;
        this.tiposProceso = seccion2.tipos;
      });      
    }, error => console.error(error));    
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.createForm();
    if (this.contratosService.getContratoIncompletoId() != 0) {
      const tempContrato = JSON.parse(localStorage.getItem('contratoActivo'));
      this.nombreArchivo = tempContrato.txt_archivoContrato;
      tempContrato.txt_archivoContrato = '';
      tempContrato.ID = tempContrato.id;
      tempContrato.dt_fechaSuscripcion = this.datePipe.transform(tempContrato.dt_fechaSuscripcion, 'yyyy-MM-dd').toString();
      this.value = tempContrato.vm_montoAdjudicado;
      this.formGroup.patchValue(tempContrato);
      this.contratosService.setContratoIncompletoId(0);
      this.formGroup.get('descripcion').setValue(this.unidades[tempContrato.qn_unidadConsolidadora].descripcion);
      this.formGroup.get('email').setValue(this.unidades[tempContrato.qn_unidadConsolidadora].email);
      for (let i in tempContrato) {
        if (tempContrato[i] != 0 && tempContrato[i] != null) {
          if (i == 'txt_codigoContrato') {
            this.formGroup.get('txt_codigoContrato').setValue(tempContrato[i]);
            this.formGroup.get('txt_codigoContrato').disable();
          }
          if (i == 'qn_tipoContrato') {
            this.formGroup.get('qn_tipoContrato').disable();
          }
          if (i == 'txt_numProceso') {
            this.formGroup.get('txt_numProceso').disable();
          }
          if (i == 'qn_tipoProceso') {
            this.formGroup.get('qn_tipoProceso').disable();
          }
          if (i == 'qn_vigenciaContrato') {
            this.formGroup.get('qn_vigenciaContrato').disable();
          }
          if (i == 'dt_fechaSuscripcion') {
            this.formGroup.get('dt_fechaSuscripcion').disable();
          }
          if (i == 'dt_fechaInicio') {
            this.formGroup.get('dt_fechaInicio').disable();
          }
          if (i == 'dt_fechaFin') {
            this.formGroup.get('dt_fechaFin').disable();
          }
          if (i == 'vm_montoAdjudicado') {
            this.formGroup.get('vm_montoAdjudicado').disable();
          }
          if (i == 'txt_nombreProveedor') {
            this.formGroup.get('txt_nombreProveedor').disable();
          }
          if (i == 'txt_rucProveedor') {
            this.formGroup.get('txt_rucProveedor').disable();
          }
          if (i == 'txt_objetoContratacion') {
            this.formGroup.get('txt_objetoContratacion').disable();
          }
          if (i == 'txt_detalleFormaPago') {
            this.formGroup.get('txt_detalleFormaPago').disable();
          }
          if (i == 'txt_detalleGarantias') {
            this.formGroup.get('txt_detalleGarantias').disable();
          }
          if (i == 'txt_nombreDelegado') {
            this.formGroup.get('txt_nombreDelegado').disable();
          }
          if (i == 'txt_nombreTecnicoExterno') {
            this.formGroup.get('txt_nombreTecnicoExterno').disable();
          }
          if (i == 'qn_unidadConsolidadora') {
            this.formGroup.get('qn_unidadConsolidadora').disable();
          }
        }
          
      }
    }
    this.formGroup.get('nombreAdmin').setValue(this.usuario[0].nombre + ' ' + this.usuario[0].apellido);
    console.log(this.formGroup.value);
    
  }
    
  llenarTabla1(seccion: Seccion) {
    this.tiposContrato = seccion.tipos;
    
  }

   elegirUnidad(selectedValue: string) {
    //this.renderer.setAttribute(this.descripcion.nativeElement, 'value', this.unidades[selectedValue].descripcion);
     //this.renderer.setAttribute(this.email.nativeElement, 'value', this.unidades[selectedValue].email);
     this.formGroup.get('descripcion').setValue(this.unidades[selectedValue].descripcion);
     this.formGroup.get('email').setValue(this.unidades[selectedValue].email);
  }
  
  private createForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formGroup = this.formBuilder.group({
      ID: 0,
      txt_codigoContrato: ['', Validators.required],
      qn_tipoContrato: [null, Validators.required],
      txt_numProceso: ['', Validators.required],
      qn_tipoProceso: [null, Validators.required],
      qn_vigenciaContrato: [null, Validators.required],
      dt_fechaSuscripcion: ['', Validators.required],
      dt_fechaInicio: ['', Validators.required],
      dt_fechaFin: ['', Validators.required],
      vm_montoAdjudicado: ['', Validators.required],
      bol_recurrencia: false,
      txt_nombreProveedor: [null, Validators.required],
      txt_rucProveedor: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      txt_objetoContratacion: ['', Validators.required],
      qn_unidadConsolidadora: ['', Validators.required],
      txt_nombreDelegado: ['', Validators.required],
      nombreAdmin: [''],
      descripcion: [''],
      email: [''],
      userID: [this.usuario[0].id],
      txt_nombreTecnicoExterno: ['', Validators.required],
      txt_detalleFormaPago: [''],
      txt_detalleGarantias: [''],
      txt_archivoContrato: ['', Validators.required],     
      qn_estadoContrato: 0,
      qn_estadoTransferencia: 0,
      txt_codigoTransferencia: null,
      dt_fechaUltimoCambio: today      
    });
  }

  elegirAdministrador() {
    const modalRef = this.modalService.open(FormUserComponent);
    modalRef.componentInstance.user = null; // should be the id
    modalRef.result.then((result) => {
      this.user = result;
      this.renderer.setAttribute(this.admin.nativeElement, 'value', this.user.txt_nombre + ' ' + this.user.txt_apellido);
      this.formGroup.get('userID').setValue(this.user.ID);
    }).catch((error) => {
      console.log(error);
    });
  }

  selectFile(files) {
    console.log(files);
    if (files.length === 0) 
      return;
    this.tempFile = files;
    console.log(this.tempFile);
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

  onSubmit() {
    console.log(this.tempFile);
    this.upload(this.tempFile);
    let contrato: Contrato = Object.assign({}, this.formGroup.value);
    if (contrato.ID != 0) {
      this.modificar(contrato);
    } else {
      this.registrar(contrato);
    }    
  }
  modificar(contrato: Contrato) {
    const tempContrato = JSON.parse(localStorage.getItem('contratoActivo'));
    for (let i in tempContrato) {
      if (tempContrato[i] == 0 || tempContrato[i] == null) {
        tempContrato[i] = contrato[i];
      }
    }
    tempContrato.ID = tempContrato.id;
    tempContrato.txt_archivoContrato = contrato.txt_archivoContrato.replace(/\\/g, "/");
    tempContrato.qn_estadoContrato = 44;
    console.log(tempContrato);
    //this.contratosService.updateContrato(tempContrato).subscribe(contratoDesdeWS => contrato = contratoDesdeWS, error => this.showError(), () => this.showSuccess("¡Modificaci&oacute;n de datos exitoso!!"));
  }

  registrar(contrato: Contrato) {
    contrato.txt_archivoContrato = contrato.txt_archivoContrato.replace(/\\/g, "/");
    contrato.qn_estadoContrato = 44;
    console.log(contrato);
    //this.contratosService.createContrato(contrato).subscribe(contratoDesdeWS => contrato = contratoDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }


  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.formGroup.reset();
    this.toastr.success(mensaje, 'Success!');
    this.router.navigate(['/contratos']);
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');

  }

  get ruc() { return this.formGroup.get('txt_rucProveedor'); }
  get nombreProveedor() { return this.formGroup.get('txt_nombreProveedor'); }
  get codigo() { return this.formGroup.get('txt_codigoContrato'); }
  get numProceso() { return this.formGroup.get('txt_numProceso'); }
  get vigencia() { return this.formGroup.get('qn_vigenciaContrato'); }
  get fechaIni() { return this.formGroup.get('dt_fechaInicio'); }
  get fechaFin() { return this.formGroup.get('dt_fechaFin'); }
  get fehaSubs() { return this.formGroup.get('dt_fechaSuscripcion'); }
  get archivo() { return this.formGroup.get('txt_archivoContrato'); }
  get objContratacion() { return this.formGroup.get('txt_objetoContratacion'); }
  get monto() { return this.formGroup.get('vm_montoAdjudicado'); }
  get delegado() { return this.formGroup.get('txt_nombreDelegado'); }
  get tecnico() { return this.formGroup.get('txt_nombreTecnicoExterno'); }
  get unidad() { return this.formGroup.get('qn_unidadConsolidadora'); }
}
