import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DatePipe, registerLocaleData } from "@angular/common";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';
import localeEs from '@angular/common/locales/es';
//import { AuthGuard } from './auth/guards/auth.guard';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "$ ",
  suffix: "",
  thousands: "."
};

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEs, 'es');

// ngx libraries
import { MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CookieService } from 'ngx-cookie-service';
import { config } from 'process';

// Angular Browser
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContratosComponent } from './views/contratos/contratos.component';
import { SideNavComponent } from './views/sidenav/sidenav.component';
import { DatosGeneralesComponent } from './views/datosGenerales/datosGenerales.component';
import { ActasComponent } from './views/actas/actas.component';
import { EntregablesComponent } from './views/entregables/entregables.component';
import { GarantiasComponent } from './views/garantias/garantias.component';
import { InformesComponent } from './views/informes/informes.component';
import { ModificacionesComponent } from './views/modificaciones/modificaciones.component';
import { MultasComponent } from './views/multas/multas.component';
import { PagosComponent } from './views/pagos/pagos.component';
import { SolicitudComponent } from './views/solicitud/solicitud.component';
import { VencimientosComponent } from './views/vencimientos/vencimientos.component';
import { ConsultaComponent } from './views/consultaGenerica/consulta.component';
import { HistorialComponent } from './views/historial/historial.component';
import { CatalogoComponent } from './catalogo/catalogo/catalogo.component';
import { MenuComponent } from './catalogo/menu/menu.component';
import { RolComponent } from './catalogo/rol/rol.component';
import { UsuarioComponent } from './catalogo/usuario/usuario.component';
import { TipoCategoriaComponent } from './catalogo/tipoCategoria/tipo-categoria.component';
import { NuevoContratoComponent } from './views/nuevo-contrato/nuevo-contrato.component';
import { ParentComponent } from './parent/parent.component';
import { ContratosService } from './views/contratos/contratos.service';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//Forms
import { FormGarantiaComponent } from './formularios/formGarantia/form-garantia.component';
import { FormEntregableComponent } from './formularios/formEntregable/form-entregable.component';
import { FormInformeComponent } from './formularios/formInforme/form-informe.component';
import { FormActaComponent } from './formularios/formActa/form-acta.component';
import { FormMultaComponent } from './formularios/formMulta/form-multa.component';
import { FormRolComponent } from './formularios/formRol/form-rol.component';
import { FormUsuarioComponent } from './formularios/formUsuario/form-usuario.component';
import { FormSeccionComponent } from './formularios/formSeccion/form-seccion.component';
import { FormTipoComponent } from './formularios/formTipo/form-tipo.component';
import { FormSolicitudComponent } from './formularios/formSolicitud/form-solicitud.component';
import { FormInformeMultaComponent } from './formularios/formInformeMulta/formInformeMulta.component';

//Pipes
import { FormUserComponent } from './formularios/form-user/form-user.component';
import { ModificacionDialogComponent } from './formularios/modificacion-dialog/modificacion-dialog.component';

//import { routes } from './app.routes';
import { ShowPdfComponent } from './views/showPdfComponent/show-pdf.component';
import { PagosDialogComponent } from './formularios/pagos-dialog/pagos-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContratosComponent,
    SideNavComponent,
    DatosGeneralesComponent,
    ActasComponent,
    EntregablesComponent,
    GarantiasComponent,
    InformesComponent,
    ModificacionesComponent,
    MultasComponent,
    PagosComponent,
    SolicitudComponent,
    VencimientosComponent,
    ConsultaComponent,
    CatalogoComponent,
    TipoCategoriaComponent,
    RolComponent,
    UsuarioComponent,
    MenuComponent,
    ParentComponent,
    ShowPdfComponent,
    HistorialComponent,
    NuevoContratoComponent,
    FormGarantiaComponent,
    FormEntregableComponent,
    FormInformeComponent,
    FormActaComponent,
    FormMultaComponent,
    FormSeccionComponent,
    FormTipoComponent,
    FormUsuarioComponent,
    FormUserComponent,
    FormRolComponent,
    FormSolicitudComponent,
    FormInformeMultaComponent,
    ModificacionDialogComponent,
    PagosDialogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MaterialModule,
    CurrencyMaskModule,
    PdfViewerModule,
    InlineSVGModule.forRoot(),
    MaterialFileInputModule,
    BrowserAnimationsModule,
    NgxExtendedPdfViewerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contratos', component: ContratosComponent },
      { path: 'DatosGenerales', component: DatosGeneralesComponent },
      { path: 'Garantia', component: GarantiasComponent },
      { path: 'Acta', component: ActasComponent },
      { path: 'Entregables', component: EntregablesComponent },
      { path: 'Informes', component: InformesComponent },
      { path: 'Modificacion', component: ModificacionesComponent },
      { path: 'Multa', component: MultasComponent },
      { path: 'formaPago', component: PagosComponent },
      { path: 'Solicitud', component: SolicitudComponent },
      { path: 'Vencimientos', component: VencimientosComponent },
      { path: 'Consulta', component: ConsultaComponent },
      { path: 'Historial', component: HistorialComponent },
      { path: 'Configuracion', component: CatalogoComponent },
      { path: 'tipos-categoria', component: TipoCategoriaComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'Tipos', component: TipoCategoriaComponent },
      { path: 'roles', component: RolComponent },
      { path: 'registrar-contrato', component: NuevoContratoComponent },
    ])
  ],
  providers: [ContratosService,
    NgbActiveModal,    
    CookieService,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
    ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormGarantiaComponent,
    FormEntregableComponent,
    FormInformeComponent,
    FormActaComponent,
    FormMultaComponent,
    FormSeccionComponent,
    FormTipoComponent,
    FormUsuarioComponent,
    FormUserComponent,
    FormRolComponent,
    FormGarantiaComponent,
    FormSolicitudComponent,
    FormInformeMultaComponent,
    ModificacionDialogComponent,
    PagosDialogComponent,
    ParentComponent,
    ShowPdfComponent
  ],
  exports: [
  ]
})
export class AppModule { }

