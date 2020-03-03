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

  tiposContrato: Tipo[];
  tiposProceso: Tipo[];
  formGroup: FormGroup;

  public contrato: Contrato;

  @ViewChild("descripcion", { static: false }) descripcion: ElementRef;
  @ViewChild("email", { static: false }) email: ElementRef;
  @ViewChild("admin", { static: false }) admin: ElementRef;

  public unidades;

  usuario: any;
  user: any;

  cantidad: string = '0';
  nombreArchivo: string = '';

  constructor(private datePipe: DatePipe, private modalService: NgbModal, private renderer: Renderer2,
    private sidenavService: SideNavService, private http: HttpClient, private formBuilder: FormBuilder,
    public contratosService: ContratosService, public router: Router, private toastr: ToastrService) {
    this.unidades =
      [
        {
          ID: "1",
          nombre: "FIEC",
          descripcion: "Unidad especializada en la compra de equipos tecnologicos",
          email: "fiec@espol.edu.ec"
        },
        {
          ID: "2",
          nombre: "FICT",
          descripcion: "Unidad especializada en la compra de equipos para excavacion",
          email: "fict@espol.edu.ec"
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
    this.createForm();
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usuario[0].nombreRol);
    if (this.contratosService.getContratoIncompletoId() != 0) {
      this.contrato = JSON.parse(localStorage.getItem('contratoActivo'));

      this.updateForm(this.contrato);
    }    
  }

  llenarTabla1(seccion: Seccion) {
    this.tiposContrato = seccion.tipos;
    
  }

   elegirUnidad(selectedValue: string) {
    this.renderer.setAttribute(this.descripcion.nativeElement, 'value', this.unidades[selectedValue].descripcion);
    this.renderer.setAttribute(this.email.nativeElement, 'value', this.unidades[selectedValue].email);
    this.renderer.setAttribute(this.admin.nativeElement, 'value', this.usuario[0].nombre + ' ' + this.usuario[0].apellido);
    this.formGroup.get('userID').setValue(this.usuario[0].id);
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
      nombreAdmin:[''],
      userID: [''],
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

  private updateForm(contrato: Contrato) {
    console.log(contrato);
    this.nombreArchivo = contrato.txt_archivoContrato;
    contrato.dt_fechaSuscripcion = this.datePipe.transform(contrato.dt_fechaSuscripcion, 'yyyy-MM-dd').toString();
    contrato.txt_archivoContrato = '';
    this.formGroup.patchValue(contrato);
    this.formGroup.get('userID').setValue(this.usuario[0].id);
    this.formGroup.get('ID').setValue(contrato.id);

    console.log(this.formGroup.value);
  }

  updateValue(value: string) {
    let val = parseInt(value, 10);
    if (Number.isNaN(val)) {
      val = 0;
    }
    this.cantidad = formatCurrency(val, 'en-US', getCurrencySymbol('USD', 'wide'));
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
   
  upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    formData.append(files.name, files);

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
    let contrato: Contrato = Object.assign({}, this.formGroup.value);
    contrato.txt_archivoContrato = contrato.txt_archivoContrato.replace(/\\/g, "/");
    contrato.qn_estadoContrato = 44;
    console.log(contrato);
    if (contrato.ID != 0) {
      if (contrato.txt_archivoContrato == null) {
        contrato.txt_archivoContrato = this.nombreArchivo;
      }
      this.modificar(contrato);
    } else {
      this.registrar(contrato);
    }    
  }
  modificar(contrato: Contrato) {
    this.contratosService.updateContrato(contrato).subscribe(contratoDesdeWS => contrato = contratoDesdeWS, error => this.showError(), () => this.showSuccess("¡Modificaci&oacute;n de datos exitoso!!"));
  }

  registrar(contrato: Contrato) {
    this.contratosService.createContrato(contrato).subscribe(contratoDesdeWS => contrato = contratoDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
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
