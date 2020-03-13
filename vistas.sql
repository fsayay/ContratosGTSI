--------------------------------------------------------
-- Archivo creado  - miércoles-marzo-04-2020   
--------------------------------------------------------

--------------------------------------------------------
--  DDL for View SG_ActaViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_ActaViews" ("tipoActa", "ID", "qn_tipoActa", "txt_codigoActa", "dt_fechaActa", "txt_archivoActa", "contratoID") AS 
  SELECT t."txt_nombreTipo" AS "tipoActa","ID","qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID"
FROM "AC_Tipos" t 
INNER JOIN "AC_Actas" g ON g."qn_tipoActa"=t."tipoID"
;
--------------------------------------------------------
--  DDL for View SG_ContratoViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_ContratoViews" ("txt_nombre", "txt_apellido", "tipoContrato", "estadoContrato", "tipoProceso", "ID", "txt_codigoContrato", "txt_numProceso", "qn_vigenciaContrato", "dt_fechaSuscripcion", "dt_fechaInicio", "dt_fechaFin", "vm_montoAdjudicado", "bol_recurrencia", "txt_nombreProveedor", "txt_rucProveedor", "txt_objetoContratacion", "qn_unidadConsolidadora", "txt_nombreDelegado", "txt_nombreTecnicoExterno", "txt_detalleFormaPago", "txt_detalleGarantias", "txt_archivoContrato", "txt_codigoTransferencia") AS 
  SELECT u."txt_nombre",u."txt_apellido",tc."txt_nombreTipo" AS "tipoContrato",ec."txt_nombreTipo" AS "estadoContrato" ,tp."txt_nombreTipo" AS "tipoProceso",c."ID","txt_codigoContrato","txt_numProceso","qn_vigenciaContrato","dt_fechaSuscripcion","dt_fechaInicio","dt_fechaFin","vm_montoAdjudicado","bol_recurrencia","txt_nombreProveedor","txt_rucProveedor","txt_objetoContratacion","qn_unidadConsolidadora","txt_nombreDelegado","txt_nombreTecnicoExterno","txt_detalleFormaPago","txt_detalleGarantias","txt_archivoContrato","txt_codigoTransferencia" 
FROM "AC_Tipos" tc 
INNER JOIN "AC_Contratos" c ON c."qn_tipoContrato"=tc."tipoID" 
INNER JOIN "AC_Tipos" tp ON c."qn_tipoProceso"=tp."tipoID"
INNER JOIN "AC_Tipos" ec ON c."qn_estadoContrato"=ec."tipoID"  
INNER JOIN "AC_Users" u ON c."userID"=u."ID"
;
--------------------------------------------------------
--  DDL for View SG_EntregableViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_EntregableViews" ("tipoEntregable", "ID", "qn_tipoEntregable", "qn_cantidadEntregable", "dt_fechaEntregable", "txt_archivoEntregable", "txt_descripcionEntregable", "contratoID") AS 
  SELECT t."txt_nombreTipo" AS "tipoEntregable","ID","qn_tipoEntregable","qn_cantidadEntregable","dt_fechaEntregable","txt_archivoEntregable","txt_descripcionEntregable","contratoID"
FROM "AC_Tipos" t 
INNER JOIN "AC_Entregables" g ON g."qn_tipoEntregable"=t."tipoID"
;
--------------------------------------------------------
--  DDL for View SG_FormaPagoViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_FormaPagoViews" ("tipoPago", "ID", "qn_tipoPago", "contratoID", "qn_porcentajePago", "bol_esAnticipo", "vm_montoPago", "dt_tentativaPago", "dt_realPago", "txt_comprobantePago") AS 
  SELECT t."txt_nombreTipo" AS "tipoPago",g."ID","qn_tipoPago","contratoID","qn_porcentajePago","bol_esAnticipo","vm_montoPago","dt_tentativaPago","dt_realPago","txt_comprobantePago"
FROM "AC_Tipos" t 
INNER JOIN "AC_FormaPago" g ON g."qn_tipoPago"=t."tipoID"
INNER JOIN "AC_Pagos" p ON g."ID"=p."formaPagoID"
;
--------------------------------------------------------
--  DDL for View SG_GarantiaViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_GarantiaViews" ("tipoGarantia", "ID", "qn_tipoGarantia", "vm_valorGarantia", "txt_codigoGarantia", "txt_proveedorGarantia", "dt_inicioGarantia", "dt_finGarantia", "txt_archivoGarantia", "contratoID") AS 
  SELECT tg."txt_nombreTipo" AS "tipoGarantia","ID","qn_tipoGarantia","vm_valorGarantia","txt_codigoGarantia","txt_proveedorGarantia","dt_inicioGarantia", "dt_finGarantia","txt_archivoGarantia","contratoID" 
FROM "AC_Tipos" tg 
INNER JOIN "AC_Garantias" g ON g."qn_tipoGarantia"=tg."tipoID"
;
--------------------------------------------------------
--  DDL for View SG_InformeViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_InformeViews" ("tipoInforme", "ID", "qn_tipoInforme", "txt_codigoInforme", "dt_fechaInforme", "txt_archivoInforme", "contratoID") AS 
  SELECT t."txt_nombreTipo" AS "tipoInforme","ID","qn_tipoInforme","txt_codigoInforme","dt_fechaInforme","txt_archivoInforme","contratoID"
FROM "AC_Tipos" t 
INNER JOIN "AC_Informes" g ON g."qn_tipoInforme"=t."tipoID"
;
--------------------------------------------------------
--  DDL for View SG_MultaViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_MultaViews" ("tipoMulta", "ID", "qn_tipoMulta", "vm_montoMulta", "txt_motivoMulta", "dt_fechaMulta", "txt_codigoInforme", "contratoID") AS 
  SELECT t."txt_nombreTipo" AS "tipoMulta","ID","qn_tipoMulta","vm_montoMulta","txt_motivoMulta","dt_fechaMulta","txt_codigoInforme","contratoID"
FROM "AC_Tipos" t 
INNER JOIN "AC_Multas" g ON g."qn_tipoMulta"=t."tipoID"
;
--------------------------------------------------------
--  DDL for View SG_UsuariosViews
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE VIEW "SG_UsuariosViews" ("ID", "Usuario", "Apellido", "Nombre", "rolID", "NombreRol") AS 
  SELECT u."ID","txt_username" AS "Usuario","txt_apellido" AS "Apellido","txt_nombre" AS "Nombre",r."ID" AS "rolID",r."txt_rolName" AS "NombreRol"
FROM "AC_Users" u INNER JOIN "AC_UserRol" ur ON u."ID"=ur."userID"
INNER JOIN "AC_Rols" r ON r."ID"=ur."rolID"
;
REM INSERTING into "SG_ActaViews"
SET DEFINE OFF;
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Parcial','1','46','ACTA2020',to_timestamp('19/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/licencia.pdf','2');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Parcial','2','46','DFRT56',to_timestamp('18/02/20 18:20:09,065000000','DD/MM/RR HH24:MI:SSXFF'),'c:/nose/dondeesta','3');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Parcial','3','46','GH456',to_timestamp('01/02/20 18:20:18,218000000','DD/MM/RR HH24:MI:SSXFF'),'c:/nose/dondeesta','3');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Parcial','4','46','SDE23',to_timestamp('29/02/20 18:20:23,935000000','DD/MM/RR HH24:MI:SSXFF'),'c:/nose/dondeesta','3');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Parcial','6','46','ACTA2019',to_timestamp('20/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 20-10-2017.pdf','2');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Parcial','21','46','ACTA2020',to_timestamp('04/03/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/Y3S8Q6R8C6K7.pdf','104');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Definitivo','5','47','GGGGGG',to_timestamp('21/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/licencia.pdf','2');
Insert into "SG_ActaViews" ("tipoActa",ID,"qn_tipoActa","txt_codigoActa","dt_fechaActa","txt_archivoActa","contratoID") values ('Definitivo','7','47','TUYU',to_timestamp('14/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 20-10-2017.pdf','2');
REM INSERTING into "SG_ContratoViews"
SET DEFINE OFF;
Insert into "SG_ContratoViews" ("txt_nombre","txt_apellido","tipoContrato","estadoContrato","tipoProceso",ID,"txt_codigoContrato","txt_numProceso","qn_vigenciaContrato","dt_fechaSuscripcion","dt_fechaInicio","dt_fechaFin","vm_montoAdjudicado","bol_recurrencia","txt_nombreProveedor","txt_rucProveedor","txt_objetoContratacion","qn_unidadConsolidadora","txt_nombreDelegado","txt_nombreTecnicoExterno","txt_detalleFormaPago","txt_detalleGarantias","txt_archivoContrato","txt_codigoTransferencia") values ('FABIAN GEOVANNY','SAYAY SAGÑAY','Bienes y Servicios Normalizados','Activo','Catalogo electronico','1','046-2019','34-2018','234',to_timestamp('21/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('29/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'23498,0','1','Kyrios Technologies','2978798798001','Buscamos talentos ','1','Jose Onias','Juan Alvarado','pagamos al contado','no le garantizamos nada','c:/load/micarpeta/contrato.pdf',null);
Insert into "SG_ContratoViews" ("txt_nombre","txt_apellido","tipoContrato","estadoContrato","tipoProceso",ID,"txt_codigoContrato","txt_numProceso","qn_vigenciaContrato","dt_fechaSuscripcion","dt_fechaInicio","dt_fechaFin","vm_montoAdjudicado","bol_recurrencia","txt_nombreProveedor","txt_rucProveedor","txt_objetoContratacion","qn_unidadConsolidadora","txt_nombreDelegado","txt_nombreTecnicoExterno","txt_detalleFormaPago","txt_detalleGarantias","txt_archivoContrato","txt_codigoTransferencia") values ('FABIAN GEOVANNY','SAYAY SAGÑAY','Bienes y Servicios Normalizados','Activo','Catalogo electronico','2','029-2019','034-234-2019','345',to_timestamp('06/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('15/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'5000,0','1','TodoTek','6865645622967','Seguimiento del proceso de cambios administrativos','1','Juan Gabiria','Galicia Roel','se cncela el contarto mediante polisa de seguro','tiene una garantia con el banco bankCountry','C:/fakepath/licencia.pdf',null);
Insert into "SG_ContratoViews" ("txt_nombre","txt_apellido","tipoContrato","estadoContrato","tipoProceso",ID,"txt_codigoContrato","txt_numProceso","qn_vigenciaContrato","dt_fechaSuscripcion","dt_fechaInicio","dt_fechaFin","vm_montoAdjudicado","bol_recurrencia","txt_nombreProveedor","txt_rucProveedor","txt_objetoContratacion","qn_unidadConsolidadora","txt_nombreDelegado","txt_nombreTecnicoExterno","txt_detalleFormaPago","txt_detalleGarantias","txt_archivoContrato","txt_codigoTransferencia") values ('MIGUEL EGBERTO','FUENTES PEÑAHERRERA','Bienes y Servicios No Normalizados','Activo','Catalogo electronico','104','hfghf','fgftryur','57',to_timestamp('08/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('29/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'76576587','0','hgjhjgjkg','7898768769976','hfkhfghjgfhj','2','gfghfhfh','ytryrytrtyu','hghfgh','hfhfhgfjh','C:/fakepath/PagoPapa 28-10-2017.pdf',null);
Insert into "SG_ContratoViews" ("txt_nombre","txt_apellido","tipoContrato","estadoContrato","tipoProceso",ID,"txt_codigoContrato","txt_numProceso","qn_vigenciaContrato","dt_fechaSuscripcion","dt_fechaInicio","dt_fechaFin","vm_montoAdjudicado","bol_recurrencia","txt_nombreProveedor","txt_rucProveedor","txt_objetoContratacion","qn_unidadConsolidadora","txt_nombreDelegado","txt_nombreTecnicoExterno","txt_detalleFormaPago","txt_detalleGarantias","txt_archivoContrato","txt_codigoTransferencia") values ('MIGUEL EGBERTO','FUENTES PEÑAHERRERA','Obras','Pendiente','Infima Cuantia','3','038-2020','34-24-2010','67',to_timestamp('14/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('29/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'5000,0','0','Inacorpsa','9676865645622','Mantenimiento de escritorios','2','Martin Granda','Jose Herrera Martinez','dos pagos suplementarios','Garantia bancaria','C:/fakepath/1289425_OCTUBRE2017.pdf',null);
REM INSERTING into "SG_EntregableViews"
SET DEFINE OFF;
Insert into "SG_EntregableViews" ("tipoEntregable",ID,"qn_tipoEntregable","qn_cantidadEntregable","dt_fechaEntregable","txt_archivoEntregable","txt_descripcionEntregable","contratoID") values ('Parcial','1','48','23',to_timestamp('13/02/20 20:04:28,811000000','DD/MM/RR HH24:MI:SSXFF'),'C:/nose','Paginadores','2');
Insert into "SG_EntregableViews" ("tipoEntregable",ID,"qn_tipoEntregable","qn_cantidadEntregable","dt_fechaEntregable","txt_archivoEntregable","txt_descripcionEntregable","contratoID") values ('Parcial','21','48','28',to_timestamp('22/03/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/Y3S8Q6R8C6K7.pdf','Minilaptops','104');
Insert into "SG_EntregableViews" ("tipoEntregable",ID,"qn_tipoEntregable","qn_cantidadEntregable","dt_fechaEntregable","txt_archivoEntregable","txt_descripcionEntregable","contratoID") values ('Final','2','49','34',to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 28-10-2017.pdf','sfdsfds','2');
Insert into "SG_EntregableViews" ("tipoEntregable",ID,"qn_tipoEntregable","qn_cantidadEntregable","dt_fechaEntregable","txt_archivoEntregable","txt_descripcionEntregable","contratoID") values ('Final','3','49','100',to_timestamp('06/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 20-10-2017.pdf','gagga','2');
REM INSERTING into "SG_FormaPagoViews"
SET DEFINE OFF;
REM INSERTING into "SG_GarantiaViews"
SET DEFINE OFF;
Insert into "SG_GarantiaViews" ("tipoGarantia",ID,"qn_tipoGarantia","vm_valorGarantia","txt_codigoGarantia","txt_proveedorGarantia","dt_inicioGarantia","dt_finGarantia","txt_archivoGarantia","contratoID") values ('Fiel Cumplimiento','1','21','5000,0','GAR1','MICROSOFT S.A.',to_timestamp('14/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('23/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 20-10-2017.pdf','2');
Insert into "SG_GarantiaViews" ("tipoGarantia",ID,"qn_tipoGarantia","vm_valorGarantia","txt_codigoGarantia","txt_proveedorGarantia","dt_inicioGarantia","dt_finGarantia","txt_archivoGarantia","contratoID") values ('Fiel Cumplimiento','2','21','567,0','GGG786','MICROSOFT S.A.',to_timestamp('08/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 20-10-2017.pdf','2');
Insert into "SG_GarantiaViews" ("tipoGarantia",ID,"qn_tipoGarantia","vm_valorGarantia","txt_codigoGarantia","txt_proveedorGarantia","dt_inicioGarantia","dt_finGarantia","txt_archivoGarantia","contratoID") values ('Fiel Cumplimiento','21','21','4000,0','GAR002','MICROSOFT S.A.',to_timestamp('12/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('23/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/Y3S8Q6R8C6K7.pdf','104');
Insert into "SG_GarantiaViews" ("tipoGarantia",ID,"qn_tipoGarantia","vm_valorGarantia","txt_codigoGarantia","txt_proveedorGarantia","dt_inicioGarantia","dt_finGarantia","txt_archivoGarantia","contratoID") values ('Buen Uso de Anticipo','3','22','5000,0','GH565656','GAR30278',to_timestamp('15/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),to_timestamp('23/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 20-10-2017.pdf','2');
REM INSERTING into "SG_InformeViews"
SET DEFINE OFF;
Insert into "SG_InformeViews" ("tipoInforme",ID,"qn_tipoInforme","txt_codigoInforme","dt_fechaInforme","txt_archivoInforme","contratoID") values ('Multa','1','52','MULTA005',to_timestamp('22/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/Certificado_RUC.pdf','2');
Insert into "SG_InformeViews" ("tipoInforme",ID,"qn_tipoInforme","txt_codigoInforme","dt_fechaInforme","txt_archivoInforme","contratoID") values ('Multa','2','52','Multa2010',to_timestamp('07/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/PagoPapa 28-10-2017.pdf','2');
Insert into "SG_InformeViews" ("tipoInforme",ID,"qn_tipoInforme","txt_codigoInforme","dt_fechaInforme","txt_archivoInforme","contratoID") values ('Multa','3','52','MULTA005',to_timestamp('14/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/licencia.pdf','2');
Insert into "SG_InformeViews" ("tipoInforme",ID,"qn_tipoInforme","txt_codigoInforme","dt_fechaInforme","txt_archivoInforme","contratoID") values ('Multa','21','52','MULTA004',to_timestamp('14/03/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'C:/fakepath/Y3S8Q6R8C6K7.pdf','104');
REM INSERTING into "SG_MultaViews"
SET DEFINE OFF;
Insert into "SG_MultaViews" ("tipoMulta",ID,"qn_tipoMulta","vm_montoMulta","txt_motivoMulta","dt_fechaMulta","txt_codigoInforme","contratoID") values ('Por Incumplimiento','1','43','566777,0','incumple metas previstas',to_timestamp('13/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'MULTA005','2');
Insert into "SG_MultaViews" ("tipoMulta",ID,"qn_tipoMulta","vm_montoMulta","txt_motivoMulta","dt_fechaMulta","txt_codigoInforme","contratoID") values ('Por Incumplimiento','2','43','7888,0','jhgjgjh',to_timestamp('21/02/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'cod123','2');
Insert into "SG_MultaViews" ("tipoMulta",ID,"qn_tipoMulta","vm_montoMulta","txt_motivoMulta","dt_fechaMulta","txt_codigoInforme","contratoID") values ('Por Incumplimiento','21','43','127,0','nose',to_timestamp('10/03/20 00:00:00,000000000','DD/MM/RR HH24:MI:SSXFF'),'MULTA004','104');
REM INSERTING into "SG_UsuariosViews"
SET DEFINE OFF;
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('1','fsayay','SAYAY SAGÑAY','FABIAN GEOVANNY','1','Administrador del Sistema');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('21','lkcrespo','CRESPO CEVALLOS','LOURDES KATHERINE','2','Administrador-Contrato');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('23','gsorian','SORIANO IDROVO','GUILLERMO ENRIQUE','2','Administrador-Contrato');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('30','mjmendie','MENDIETA RUBIO','MARÍA JOSÉ','2','Administrador-Contrato');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('31','cparedes','PAREDES VERDUGA','CECILIA ALEXANDRA','3','Usuario-UAS');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('47','jmorbion','MORBIONI YEPEZ','JULIA LORENA','4','Usuario-Consultor');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('56','mballada','BALLADARES RAMOS','MARCOS MAURICIO','2','Administrador-Contrato');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('158','mefuente','FUENTES PEÑAHERRERA','MIGUEL EGBERTO','2','Administrador-Contrato');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('168','gmmirand','MIRANDA NOGALES','GISSELE MARIE','2','Administrador-Contrato');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('178','groldos','ROLDOS AROSEMENA','GALO XAVIER','4','Usuario-Consultor');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('182','memosque','MOSQUERA HERMENEJILDO','MARGARITA ELVIA','4','Usuario-Consultor');
Insert into "SG_UsuariosViews" (ID,"Usuario","Apellido","Nombre","rolID","NombreRol") values ('188','nrponce','PONCE LOOR','NURY DEL ROCIO','2','Administrador-Contrato');
