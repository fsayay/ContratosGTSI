--------------------------------------------------------
-- Archivo creado  - domingo-febrero-02-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Type LOGMNR$COL_GG_REC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$COL_GG_REC" as object
(
LOGMNR_UID NUMBER,
OBJ# NUMBER,
MD_COL_NAME VARCHAR2(384),
MD_COL_NUM NUMBER,                 /* col# */
MD_COL_SEGCOL NUMBER,              /* segcol# */
MD_COL_TYPE NUMBER,                /* type# */
MD_COL_LEN NUMBER,
MD_COL_PREC NUMBER,                /* precision */
MD_COL_SCALE NUMBER,
MD_COL_CHARSETID NUMBER,           /* character set id */
MD_COL_CHARSETFORM NUMBER,         /* character set form */
MD_COL_ALT_TYPE VARCHAR2(4000),    /* adt type if any */
MD_COL_ALT_PREC NUMBER,            /* precision of the adt attribute */
MD_COL_ALT_CHAR_USED VARCHAR2(2),  /* charset used by the adt attribute */
MD_COL_ALT_LENGTH NUMBER,          /* length of the adt attribute */
MD_COL_ALT_XML_TYPE NUMBER,        /* 0/1. is xml_type column */
MD_COL_ALT_BINARYXML_TYPE NUMBER,  /* 0/1. is xml_type stored as binary */
MD_COL_ENC_ISENC VARCHAR2(3) ,     /* 'YES'/'NO' */
MD_COL_ENC_NOSALT VARCHAR2(3) ,    /* 'YES'/'NO' */
MD_COL_ENC_ISLOB VARCHAR2(3) ,     /* 'YES'/'NO' */
MD_COL_ALT_OBJECTXML_TYPE NUMBER,  /* 0/1 xml_type stored as object */
MD_COL_HASNOTNULLDEFAULT VARCHAR2(3) ,   /* 'YES'/'NO' */
MD_COL_ALT_TYPE_OWNER VARCHAR2(384),  /* owner of the adt type if any */
PROPERTY NUMBER,
XCOLTYPEFLAGS NUMBER,
XOPQTYPEFLAGS NUMBER,
EAFLAGS NUMBER,
XFQCOLNAME VARCHAR2(4000),
SPARE1  NUMBER,
SPARE2  NUMBER,
SPARE3  NUMBER,
SPARE4  VARCHAR2(4000),
SPARE5  VARCHAR2(4000),
SPARE6  VARCHAR2(4000),
/* Following fields added in 12.1.0.2 */
OBJV# NUMBER,
INTCOL# NUMBER,
INTERVAL_LEADING_PRECISION NUMBER,
INTERVAL_TRAILING_PRECISION NUMBER,
TOID RAW(16),
TYPENAME VARCHAR2(384),
NUMINTCOLS NUMBER,
NUMATTRS NUMBER,
ADTORDER NUMBER,
LOGMNR_SPARE1 NUMBER,
LOGMNR_SPARE2 NUMBER,
LOGMNR_SPARE3 VARCHAR2(1000),
LOGMNR_SPARE4 DATE,
LOGMNR_SPARE5 NUMBER,
LOGMNR_SPARE6 NUMBER,
LOGMNR_SPARE7 NUMBER,
LOGMNR_SPARE8 NUMBER,
LOGMNR_SPARE9 NUMBER,
XTYPENAME VARCHAR2(4000),
XTOPINTCOL NUMBER,
XREFFEDTABLEOBJN NUMBER,
XREFFEDTABLEOBJV NUMBER,
XOPQTYPETYPE NUMBER,
XOPQLOBINTCOL NUMBER,
XOPQOBJINTCOL NUMBER,
XXMLINTCOL    NUMBER,
LOGMNRDERIVEDFLAGS NUMBER,
/* Following fields added in 12.2 */
COLLID      NUMBER,
COLLINTCOL#  NUMBER,
ACDRRESCOL# NUMBER
);

/
--------------------------------------------------------
--  DDL for Type LOGMNR$COL_GG_RECS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$COL_GG_RECS" AS TABLE OF  SYSTEM.LOGMNR$COL_GG_REC;

/
--------------------------------------------------------
--  DDL for Type LOGMNR$GSBA_GG_REC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$GSBA_GG_REC" AS OBJECT
(
LOGMNR_UID NUMBER,
NAME           VARCHAR2(384),
VALUE          VARCHAR2(4000),
LOGMNR_SPARE1  NUMBER,
LOGMNR_SPARE2  NUMBER,
LOGMNR_SPARE3  VARCHAR2(4000),
LOGMNR_SPARE4  DATE
);

/
--------------------------------------------------------
--  DDL for Type LOGMNR$GSBA_GG_RECS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$GSBA_GG_RECS" AS TABLE OF  SYSTEM.LOGMNR$GSBA_GG_REC;

/
--------------------------------------------------------
--  DDL for Type LOGMNR$KEY_GG_REC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$KEY_GG_REC" as object
(
LOGMNR_UID NUMBER,
KEY# NUMBER,                   /* index obj# or con# */
KEY_FLAGS NUMBER,              /* index or constraint */
KEY_NAME VARCHAR2(384),        /* index name or constraint name */
INDEX_OWNER# NUMBER,
INDEX_OWNERNAME VARCHAR2(384),
COLNAME VARCHAR2(384),
INTCOL# NUMBER,
which number,
KEY_ORDER VARCHAR2(10),              /* asc or desc */
KEYCOL_FLAGS NUMBER,           /* Column properties such as is_null */
SPARE1  NUMBER,
SPARE2  NUMBER,
SPARE3  NUMBER,
SPARE4  VARCHAR2(4000),
SPARE5  VARCHAR2(4000),
SPARE6  VARCHAR2(4000)
);

/
--------------------------------------------------------
--  DDL for Type LOGMNR$KEY_GG_RECS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$KEY_GG_RECS" AS TABLE OF  SYSTEM.LOGMNR$KEY_GG_REC;

/
--------------------------------------------------------
--  DDL for Type LOGMNR$SEQ_GG_REC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$SEQ_GG_REC" as object
(
LOGMNR_UID NUMBER,
OBJ# NUMBER,
NAME VARCHAR2(384),
OWNER# NUMBER,
OWNERNAME VARCHAR2(384),
FLAGS NUMBER,
MD_TAB_SEQCACHE NUMBER,
MD_TAB_SEQINCREMENTBY NUMBER,
SPARE1  NUMBER,
SPARE2  NUMBER,
SPARE3  NUMBER,
SPARE4  VARCHAR2(4000),
SPARE5  VARCHAR2(4000),
SPARE6  VARCHAR2(4000)
);

/
--------------------------------------------------------
--  DDL for Type LOGMNR$SEQ_GG_RECS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$SEQ_GG_RECS" AS TABLE OF  SYSTEM.LOGMNR$SEQ_GG_REC;

/
--------------------------------------------------------
--  DDL for Type LOGMNR$TAB_GG_REC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$TAB_GG_REC" as object
(
LOGMNR_UID NUMBER,
OBJ# NUMBER,
BASEOBJV# NUMBER,
MD_TAB_USERID NUMBER,                /* owner# */
MD_TAB_COLCOUNT NUMBER,              /* user column count */
MD_TAB_TOTAL_COL_NUM NUMBER,         /* kernal column count */
MD_TAB_LOG_GROUP_EXISTS NUMBER,      /* Any log group exists for this table */
MD_TAB_IOT VARCHAR2(3) ,             /* 'YES'/'NO' IS IOT? */
MD_TAB_IOT_OVERFLOW VARCHAR2(3) ,    /* 'YES'/'NO' IOT with overflow ? */
MD_TAB_PARTITION  VARCHAR2(3) ,      /* 'YES'/'NO' is partitioned ? */
MD_TAB_SUBPARTITION VARCHAR2(3) ,    /* 'YES'/'NO' is sub partitioned? */
MD_TAB_XMLTYPETABLE VARCHAR2(3) ,    /* 'YES'/'NO' is xmltype table? */
MD_TAB_OBJECTID NUMBER,              /* object id if table object */
MD_TAB_OWNER VARCHAR2(384),     /* owner name */
MD_TAB_NAME VARCHAR2(384),      /* table name */
MD_TAB_OBJTYPE VARCHAR2(384),   /* Object type name */
MD_TAB_SCN NUMBER,                   /* COMMIT_SCN of this table version */
TAB_FLAGS NUMBER,
TRIGFLAG NUMBER,
OBJ_FLAGS NUMBER,
PROPERTY NUMBER,
PARTTYPE NUMBER,
SUBPARTTYPE NUMBER,
SPARE1  NUMBER,
SPARE2  NUMBER,
SPARE3  NUMBER,
SPARE4  VARCHAR2(4000),
SPARE5  VARCHAR2(4000),
SPARE6  VARCHAR2(4000),
/* Following fields added in 12.1.0.2 */
LVLCNT NUMBER,
LVL1OBJ# NUMBER,
LVL2OBJ# NUMBER,
LVL1TYPE# NUMBER,
LVL2TYPE# NUMBER,
LVL1NAME  VARCHAR2(384),
LVL2NAME  VARCHAR2(384),
INTCOLS   NUMBER,
ASSOC#    NUMBER,
XIDUSN    NUMBER,
XIDSLT    NUMBER,
XIDSQN    NUMBER,
DROP_SCN  NUMBER,
FLAGS     NUMBER,
LOGMNR_SPARE1   NUMBER,
LOGMNR_SPARE2   NUMBER,
LOGMNR_SPARE3   VARCHAR2(1000),
LOGMNR_SPARE4   DATE,
LOGMNR_SPARE5   NUMBER,
LOGMNR_SPARE6   NUMBER,
LOGMNR_SPARE7   NUMBER,
LOGMNR_SPARE8   NUMBER,
LOGMNR_SPARE9   NUMBER,
UNSUPPORTEDCOLS  NUMBER,
COMPLEXTYPECOLS  NUMBER,
NTPARENTOBJNUM   NUMBER,
NTPARENTOBJVERSION NUMBER,
NTPARENTINTCOLNUM  NUMBER,
LOGMNRTLOFLAGS    NUMBER,
LOGMNRMCV VARCHAR2(30),
/* Following fields added in 12.2 */
ACDRFLAGS        NUMBER,                                    /* automatic CDR */
ACDRTSOBJ#       NUMBER,                                    /* automatic CDR */
ACDRROWTSINTCOL# NUMBER                                     /* automatic CDR */
);

/
--------------------------------------------------------
--  DDL for Type LOGMNR$TAB_GG_RECS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$TAB_GG_RECS" AS TABLE OF  SYSTEM.LOGMNR$TAB_GG_REC;

/
--------------------------------------------------------
--  DDL for Type LOGMNR$USER_GG_REC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$USER_GG_REC" AS OBJECT
(
LOGMNR_UID     NUMBER,
USERNAME       VARCHAR2(384),
USERID         NUMBER,
LOGMNR_SPARE1  NUMBER,
LOGMNR_SPARE2  NUMBER,
LOGMNR_SPARE3  VARCHAR2(4000),
LOGMNR_SPARE4  DATE
);

/
--------------------------------------------------------
--  DDL for Type LOGMNR$USER_GG_RECS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TYPE "SYSTEM"."LOGMNR$USER_GG_RECS" AS TABLE OF  SYSTEM.LOGMNR$USER_GG_REC;

/
--------------------------------------------------------
--  DDL for Sequence LOGMNR_DIDS$
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."LOGMNR_DIDS$"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  ORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence LOGMNR_EVOLVE_SEQ$
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."LOGMNR_EVOLVE_SEQ$"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  ORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence LOGMNR_SEQ$
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."LOGMNR_SEQ$"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  ORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence LOGMNR_UIDS$
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."LOGMNR_UIDS$"  MINVALUE 100 MAXVALUE 99999 INCREMENT BY 1 START WITH 100 NOCACHE  ORDER  CYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence MVIEW$_ADVSEQ_GENERIC
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."MVIEW$_ADVSEQ_GENERIC"  MINVALUE 1 MAXVALUE 4294967295 INCREMENT BY 1 START WITH 1 CACHE 50 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence MVIEW$_ADVSEQ_ID
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."MVIEW$_ADVSEQ_ID"  MINVALUE 1 MAXVALUE 4294967295 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence ROLLING_EVENT_SEQ$
--------------------------------------------------------

   CREATE SEQUENCE  "SYSTEM"."ROLLING_EVENT_SEQ$"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  ORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Table SGC_Actas
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Actas" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_tipoActa" NUMBER(10,0), 
	"txt_codigoActa" NVARCHAR2(2000), 
	"dt_fechaActa" TIMESTAMP (7), 
	"txt_archivoActa" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Contratos
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Contratos" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_codigoContrato" NVARCHAR2(2000), 
	"qn_tipoContrato" NUMBER(10,0), 
	"txt_numProceso" NVARCHAR2(2000), 
	"qn_tipoProceso" NUMBER(10,0), 
	"qn_vigenciaContrato" NUMBER(10,0), 
	"dt_fechaSuscripcion" TIMESTAMP (7), 
	"dt_fechaInicio" TIMESTAMP (7), 
	"dt_fechaFin" TIMESTAMP (7), 
	"vm_montoAdjudicado" BINARY_DOUBLE, 
	"bol_recurrencia" NUMBER(1,0), 
	"qn_proveedor" NUMBER(10,0), 
	"txt_objetoContratacion" NVARCHAR2(2000), 
	"qn_unidadConsolidadora" NUMBER(10,0), 
	"txt_nombreDelegado" NVARCHAR2(2000), 
	"txt_nombreAdministrador" NVARCHAR2(2000), 
	"txt_nombreTecnicoExterno" NVARCHAR2(2000), 
	"txt_detalleFormaPago" NVARCHAR2(2000), 
	"txt_detalleGarantias" NVARCHAR2(2000), 
	"txt_archivoContrato" NVARCHAR2(2000), 
	"qn_estadoContrato" NUMBER(10,0), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"solicitudID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Entregables
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Entregables" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_tipoEntregable" NUMBER(10,0), 
	"qn_cantidadEntregable" NUMBER(10,0), 
	"dt_fechaEntregable" TIMESTAMP (7), 
	"txt_archivoEntregable" NVARCHAR2(2000), 
	"txt_descripcionEntregable" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_FechaModificado
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_FechaModificado" 
   (	"ID" NUMBER(10,0), 
	"dt_fechaAnterior" TIMESTAMP (7), 
	"dt_fechaActual" TIMESTAMP (7)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_FormaPago
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_FormaPago" 
   (	"ID" NUMBER(10,0), 
	"qn_tipoPago" NUMBER(10,0), 
	"txt_archivoPago" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Garantias
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Garantias" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_tipoGarantia" NUMBER(10,0), 
	"vm_valorGarantia" BINARY_DOUBLE, 
	"txt_codigoGarantia" NVARCHAR2(2000), 
	"txt_proveedorGarantia" NVARCHAR2(2000), 
	"dt_inicioGarantia" TIMESTAMP (7), 
	"dt_finGarantia" TIMESTAMP (7), 
	"txt_archivoGarantia" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Historial
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Historial" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_seccionHistorial" NVARCHAR2(2000), 
	"txt_accionHistorial" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Informes
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Informes" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_tipoInforme" NUMBER(10,0), 
	"txt_codigoInforme" NVARCHAR2(2000), 
	"dt_fechaInforme" TIMESTAMP (7), 
	"txt_archivoInforme" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Modificaciones
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Modificaciones" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_tipoModificacion" NUMBER(10,0), 
	"txt_motivoModificacion" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Multas
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Multas" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_tipoMulta" NUMBER(10,0), 
	"vm_montoMulta" BINARY_DOUBLE, 
	"txt_motivoMulta" NVARCHAR2(2000), 
	"dt_fechaMulta" TIMESTAMP (7), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"txt_codigoInforme" NVARCHAR2(2000), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Pagos
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Pagos" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_porcentajePago" BINARY_FLOAT, 
	"bol_esAnticipo" NUMBER(1,0), 
	"vm_montoPago" BINARY_DOUBLE, 
	"dt_tentativaPago" TIMESTAMP (7), 
	"dt_realPago" TIMESTAMP (7), 
	"txt_comprobantePago" NVARCHAR2(2000), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"formaPagoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Rols
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Rols" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_rolName" NVARCHAR2(2000), 
	"txt_rolDetaile" NVARCHAR2(2000)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Secciones
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Secciones" 
   (	"seccionID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_nombreSeccion" NVARCHAR2(2000), 
	"txt_detalleSeccion" NVARCHAR2(2000)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Solicitudes
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Solicitudes" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"qn_cantContratos" NUMBER(10,0), 
	"txt_motivoSolicitud" NVARCHAR2(2000), 
	"userID" NUMBER(10,0), 
	"qn_estadoSolicitud" NUMBER(10,0), 
	"dt_fechaUltimoCambio" TIMESTAMP (7)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Tipos
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Tipos" 
   (	"tipoID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_nombreTipo" NVARCHAR2(2000), 
	"txt_detalleTipo" NVARCHAR2(2000), 
	"seccionID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_UserRol
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_UserRol" 
   (	"userID" NUMBER(10,0), 
	"rolID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Users
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Users" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_username" NVARCHAR2(2000), 
	"txt_emailAlterno" NVARCHAR2(2000), 
	"txt_token" NVARCHAR2(2000)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_ValorModificado
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_ValorModificado" 
   (	"ID" NUMBER(10,0), 
	"vm_valorAnterior" BINARY_DOUBLE, 
	"vm_valorActual" BINARY_DOUBLE
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Table SGC_Vencimientos
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SGC_Vencimientos" 
   (	"ID" NUMBER(10,0) GENERATED BY DEFAULT ON NULL AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"txt_nombreSeccion" NVARCHAR2(2000), 
	"txt_nombreTipo" NVARCHAR2(2000), 
	"dt_fechaVencimiento" TIMESTAMP (7), 
	"qn_diasAnticipacion" NUMBER(10,0), 
	"qn_frecuenciaAnticipacion" NUMBER(10,0), 
	"dt_fechaUltimoCambio" TIMESTAMP (7), 
	"contratoID" NUMBER(10,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for View MVIEW_EVALUATIONS
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_EVALUATIONS" ("RUNID", "MVIEW_OWNER", "MVIEW_NAME", "RANK", "STORAGE_IN_BYTES", "FREQUENCY", "CUMULATIVE_BENEFIT", "BENEFIT_TO_COST_RATIO") AS 
  select
  t1.runid# as runid,
  summary_owner AS mview_owner,
  summary_name AS mview_name,
  rank# as rank,
  storage_in_bytes,
  frequency,
  cumulative_benefit,
  benefit_to_cost_ratio
from SYSTEM.MVIEW$_ADV_OUTPUT t1, SYSTEM.MVIEW$_ADV_LOG t2, ALL_USERS u
where
  t1.runid# = t2.runid# and
  u.username = t2.uname and
  u.user_id = userenv('SCHEMAID') and
  t1.output_type = 1
order by t1.rank#;

   COMMENT ON TABLE "SYSTEM"."MVIEW_EVALUATIONS"  IS 'This view gives DBA access to summary evaluation output'
;
--------------------------------------------------------
--  DDL for View MVIEW_EXCEPTIONS
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_EXCEPTIONS" ("RUNID", "OWNER", "TABLE_NAME", "DIMENSION_NAME", "RELATIONSHIP", "BAD_ROWID") AS 
  select
  t1.runid# as runid,
  owner,
  table_name,
  dimension_name,
  relationship,
  bad_rowid
from SYSTEM.MVIEW$_ADV_EXCEPTIONS t1, SYSTEM.MVIEW$_ADV_LOG t2, ALL_USERS u
where
  t1.runid# = t2.runid# and
  u.username = t2.uname and
  u.user_id = userenv('SCHEMAID');

   COMMENT ON TABLE "SYSTEM"."MVIEW_EXCEPTIONS"  IS 'This view gives DBA access to dimension validation results'
;
--------------------------------------------------------
--  DDL for View MVIEW_FILTER
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_FILTER" ("FILTERID", "SUBFILTERNUM", "SUBFILTERTYPE", "STR_VALUE", "NUM_VALUE1", "NUM_VALUE2", "DATE_VALUE1", "DATE_VALUE2") AS 
  select
      a.filterid# as filterid,
      a.subfilternum# as subfilternum,
      decode(a.subfiltertype,1,'APPLICATION',2,'CARDINALITY',3,'LASTUSE',
                             4,'FREQUENCY',5,'USER',6,'PRIORITY',7,'BASETABLE',
                             8,'RESPONSETIME',9,'COLLECTIONID',10,'TRACENAME',
                             11,'SCHEMA','UNKNOWN') AS subfiltertype,
      a.str_value,
      to_number(decode(a.num_value1,-999,NULL,a.num_value1)) AS num_value1,
      to_number(decode(a.num_value2,-999,NULL,a.num_value2)) AS num_value2,
      a.date_value1,
      a.date_value2
   from system.mview$_adv_filter a, system.mview$_adv_log b, ALL_USERS u
   WHERE a.filterid# = b.runid#
   AND b.uname = u.username
   AND u.user_id = userenv('SCHEMAID');

   COMMENT ON TABLE "SYSTEM"."MVIEW_FILTER"  IS 'Workload filter records'
;
--------------------------------------------------------
--  DDL for View MVIEW_FILTERINSTANCE
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_FILTERINSTANCE" ("RUNID", "FILTERID", "SUBFILTERNUM", "SUBFILTERTYPE", "STR_VALUE", "NUM_VALUE1", "NUM_VALUE2", "DATE_VALUE1", "DATE_VALUE2") AS 
  select
      a.runid# as runid,
      a.filterid# as filterid,
      a.subfilternum# as subfilternum,
      decode(a.subfiltertype,1,'APPLICATION',2,'CARDINALITY',3,'LASTUSE',
                             4,'FREQUENCY',5,'USER',6,'PRIORITY',7,'BASETABLE',
                             8,'RESPONSETIME',9,'COLLECTIONID',10,'TRACENAME',
                             11,'SCHEMA','UNKNOWN') AS subfiltertype,
      a.str_value,
      to_number(decode(a.num_value1,-999,NULL,a.num_value1)) AS num_value1,
      to_number(decode(a.num_value2,-999,NULL,a.num_value2)) AS num_value2,
      a.date_value1,
      a.date_value2
   from system.mview$_adv_filterinstance a;

   COMMENT ON TABLE "SYSTEM"."MVIEW_FILTERINSTANCE"  IS 'Workload filter instance records'
;
--------------------------------------------------------
--  DDL for View MVIEW_LOG
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_LOG" ("ID", "FILTERID", "RUN_BEGIN", "RUN_END", "TYPE", "STATUS", "MESSAGE", "COMPLETED", "TOTAL", "ERROR_CODE") AS 
  select
      m.runid# as id,
      m.filterid# as filterid,
      m.run_begin,
      m.run_end,
      decode(m.run_type,1,'EVALUATE',2,'EVALUATE_W',3,'RECOMMEND',
                      4,'RECOMMEND_W',5,'VALIDATE',6,'WORKLOAD',
                      7,'FILTER','UNKNOWN') AS type,
      decode(m.status,0,'UNUSED',1,'CANCELLED',2,'IN_PROGRESS',3,'COMPLETED',
                    4,'ERROR','UNKNOWN') AS status,
      m.message,
      m.completed,
      m.total,
      m.error_code
   from system.mview$_adv_log m, all_users u
   where m.uname = u.username
   and   u.user_id = userenv('SCHEMAID');

   COMMENT ON TABLE "SYSTEM"."MVIEW_LOG"  IS 'Advisor session log'
;
--------------------------------------------------------
--  DDL for View MVIEW_RECOMMENDATIONS
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_RECOMMENDATIONS" ("RUNID", "ALL_TABLES", "FACT_TABLES", "GROUPING_LEVELS", "QUERY_TEXT", "RECOMMENDATION_NUMBER", "RECOMMENDED_ACTION", "MVIEW_OWNER", "MVIEW_NAME", "STORAGE_IN_BYTES", "PCT_PERFORMANCE_GAIN", "BENEFIT_TO_COST_RATIO") AS 
  select
  t1.runid# as runid,
  t1.from_clause as all_tables,
  fact_tables,
  grouping_levels,
  query_text,
  rank# as recommendation_number,
  action_type as recommended_action,
  summary_owner as mview_owner,
  summary_name as mview_name,
  storage_in_bytes,
  pct_performance_gain,
  benefit_to_cost_ratio
from SYSTEM.MVIEW$_ADV_OUTPUT t1, SYSTEM.MVIEW$_ADV_LOG t2, ALL_USERS u
where
  t1.runid# = t2.runid# and
  u.username = t2.uname and
  u.user_id = userenv('SCHEMAID') and
  t1.output_type = 0
order by t1.rank#;

   COMMENT ON TABLE "SYSTEM"."MVIEW_RECOMMENDATIONS"  IS 'This view gives DBA access to summary recommendations'
;
--------------------------------------------------------
--  DDL for View MVIEW_WORKLOAD
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."MVIEW_WORKLOAD" ("WORKLOADID", "IMPORT_TIME", "QUERYID", "APPLICATION", "CARDINALITY", "RESULTSIZE", "LASTUSE", "FREQUENCY", "OWNER", "PRIORITY", "QUERY", "RESPONSETIME") AS 
  select
  a.collectionid# as workloadid,
  a.collecttime as import_time,
  a.queryid# as queryid,
  a.application,
  a.cardinality,
  a.resultsize,
  a.qdate as lastuse,
  a.frequency,
  a.uname as owner,
  a.priority,
  a.sql_text as query,
  a.exec_time as responsetime
from SYSTEM.MVIEW$_ADV_WORKLOAD A, SYSTEM.MVIEW$_ADV_LOG B, ALL_USERS D
WHERE a.collectionid# = b.runid#
AND b.uname = d.username
AND d.user_id = userenv('SCHEMAID');

   COMMENT ON TABLE "SYSTEM"."MVIEW_WORKLOAD"  IS 'This view gives DBA access to shared workload'
;
--------------------------------------------------------
--  DDL for View PRODUCT_PRIVS
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."PRODUCT_PRIVS" ("PRODUCT", "USERID", "ATTRIBUTE", "SCOPE", "NUMERIC_VALUE", "CHAR_VALUE", "DATE_VALUE", "LONG_VALUE") AS 
  SELECT PRODUCT, USERID, ATTRIBUTE, SCOPE,
         NUMERIC_VALUE, CHAR_VALUE, DATE_VALUE, LONG_VALUE
  FROM SQLPLUS_PRODUCT_PROFILE
  WHERE USERID = 'PUBLIC' OR
        USERID LIKE SYS_CONTEXT('USERENV','CURRENT_USER')
;
--------------------------------------------------------
--  DDL for View SCHEDULER_JOB_ARGS
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."SCHEDULER_JOB_ARGS" ("OWNER", "JOB_NAME", "ARGUMENT_NAME", "ARGUMENT_POSITION", "ARGUMENT_TYPE", "VALUE", "ANYDATA_VALUE", "OUT_ARGUMENT") AS 
  SELECT "OWNER","JOB_NAME","ARGUMENT_NAME","ARGUMENT_POSITION","ARGUMENT_TYPE","VALUE","ANYDATA_VALUE","OUT_ARGUMENT" FROM sys.all_scheduler_job_args
;
--------------------------------------------------------
--  DDL for View SCHEDULER_PROGRAM_ARGS
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."SCHEDULER_PROGRAM_ARGS" ("OWNER", "PROGRAM_NAME", "ARGUMENT_NAME", "ARGUMENT_POSITION", "ARGUMENT_TYPE", "METADATA_ATTRIBUTE", "DEFAULT_VALUE", "DEFAULT_ANYDATA_VALUE", "OUT_ARGUMENT") AS 
  SELECT "OWNER","PROGRAM_NAME","ARGUMENT_NAME","ARGUMENT_POSITION","ARGUMENT_TYPE","METADATA_ATTRIBUTE","DEFAULT_VALUE","DEFAULT_ANYDATA_VALUE","OUT_ARGUMENT" FROM sys.all_scheduler_program_args
;
REM INSERTING into SYSTEM."SGC_Actas"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Contratos"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Entregables"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_FechaModificado"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_FormaPago"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Garantias"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Historial"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Informes"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Modificaciones"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Multas"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Pagos"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Rols"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Secciones"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Solicitudes"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Tipos"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_UserRol"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Users"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_ValorModificado"
SET DEFINE OFF;
REM INSERTING into SYSTEM."SGC_Vencimientos"
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index IX_SGC_Actas_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Actas_contratoID" ON "SYSTEM"."SGC_Actas" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Actas
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Actas" ON "SYSTEM"."SGC_Actas" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Contratos_solicitudID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Contratos_solicitudID" ON "SYSTEM"."SGC_Contratos" ("solicitudID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Contratos
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Contratos" ON "SYSTEM"."SGC_Contratos" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Entregables_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Entregables_contratoID" ON "SYSTEM"."SGC_Entregables" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Entregables
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Entregables" ON "SYSTEM"."SGC_Entregables" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_FechaModificado
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_FechaModificado" ON "SYSTEM"."SGC_FechaModificado" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_FormaPago
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_FormaPago" ON "SYSTEM"."SGC_FormaPago" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Garantias
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Garantias" ON "SYSTEM"."SGC_Garantias" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Garantias_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Garantias_contratoID" ON "SYSTEM"."SGC_Garantias" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Historial
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Historial" ON "SYSTEM"."SGC_Historial" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Historial_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Historial_contratoID" ON "SYSTEM"."SGC_Historial" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Informes
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Informes" ON "SYSTEM"."SGC_Informes" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Informes_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Informes_contratoID" ON "SYSTEM"."SGC_Informes" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Modificaciones
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Modificaciones" ON "SYSTEM"."SGC_Modificaciones" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Modificaciones_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Modificaciones_contratoID" ON "SYSTEM"."SGC_Modificaciones" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Multas_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Multas_contratoID" ON "SYSTEM"."SGC_Multas" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Multas
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Multas" ON "SYSTEM"."SGC_Multas" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Pagos_formaPagoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Pagos_formaPagoID" ON "SYSTEM"."SGC_Pagos" ("formaPagoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Pagos
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Pagos" ON "SYSTEM"."SGC_Pagos" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Rols
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Rols" ON "SYSTEM"."SGC_Rols" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Secciones
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Secciones" ON "SYSTEM"."SGC_Secciones" ("seccionID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Solicitudes_userID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Solicitudes_userID" ON "SYSTEM"."SGC_Solicitudes" ("userID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Solicitudes
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Solicitudes" ON "SYSTEM"."SGC_Solicitudes" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Tipos_seccionID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Tipos_seccionID" ON "SYSTEM"."SGC_Tipos" ("seccionID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Tipos
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Tipos" ON "SYSTEM"."SGC_Tipos" ("tipoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_UserRol_rolID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_UserRol_rolID" ON "SYSTEM"."SGC_UserRol" ("rolID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_UserRol
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_UserRol" ON "SYSTEM"."SGC_UserRol" ("userID", "rolID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Users
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Users" ON "SYSTEM"."SGC_Users" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_ValorModificado
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_ValorModificado" ON "SYSTEM"."SGC_ValorModificado" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index IX_SGC_Vencimientos_contratoID
--------------------------------------------------------

  CREATE INDEX "SYSTEM"."IX_SGC_Vencimientos_contratoID" ON "SYSTEM"."SGC_Vencimientos" ("contratoID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index PK_SGC_Vencimientos
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."PK_SGC_Vencimientos" ON "SYSTEM"."SGC_Vencimientos" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Function LOGMNR$COL_GG_TABF_PUBLIC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE FUNCTION "SYSTEM"."LOGMNR$COL_GG_TABF_PUBLIC" wrapped
a000000
1
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
8
237 185
nkvJV1w6wH1y7mRApzf9mGuebNUwgxDILkhGfHQCmP8+Vi4fyqh3SG1Fyq+pCts1OlgnK761
YuzKBA4JE5DNwZzBIF/Y4ZM5eUlquVyTkOg+AodK3vQJt9NLvPITXbP42O37gO+zKr4BQEJk
ypwrP1U/Pf6MLZONN8LUaVqHCN87T14HqHs5taX7LhLXQ2lCVBE1Ll8dyB9CDOlbyvQS/lrb
+0n1pQi9IJAWySL85ChAqnTaqFJm0YeToD4lZ8UUPQqIZNoX0x73WK9OzsmdBrvEC97iduxe
PEXVkxF6xklPod6yOGBvW7DAFMBgf+LajDLVKOAwB2EAiKCXYMuTUTtMYYkCFFf4sj1rCpsj
TLth6TSru530aM2HP6bEbm3m

/
--------------------------------------------------------
--  DDL for Function LOGMNR$GSBA_GG_TABF_PUBLIC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE FUNCTION "SYSTEM"."LOGMNR$GSBA_GG_TABF_PUBLIC" wrapped
a000000
1
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
8
206 171
6gxi/CQwK1I5Rfwuw/SXrOGpVRYwgwLI1yfbfHRGEjNe54OE4QwRZCoA20oG536tzgcBrj+1
xE3tE8jIhAoTlUdUmkdYMmZycO1SdiJZwwt/6BrM1wHXl/E5+3Ip2NXzC9j8v4+KjkD9d5AT
p05eEsEWjU1CBTMSpjZZrXzbgFl9QNnQ+zJGjSug21f76ajs78m6anxz7vFcTcem6XpAgKjc
EXzd/ijP8qiOqwblTfnXcRslJn3MljD02u+5fh9NBctOmnaw/tOjRCFPUhY8I9gCoMptjG7U
rHEIFzHOFyxBEdulRGq4ngSgcm7l2yOdSHgNM8rO2vUH4gozvJoLE1S8GBBzG/wrvHPhACQ/
2w==

/
--------------------------------------------------------
--  DDL for Function LOGMNR$KEY_GG_TABF_PUBLIC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE FUNCTION "SYSTEM"."LOGMNR$KEY_GG_TABF_PUBLIC" wrapped
a000000
1
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
8
2a0 1a1
3O4I5hDO715d8A2tqbxMCflFW0owg/D319xqfC9Grfg+K6yE71zMvtNS45AyRXBk77WpI5v4
nUSfE2lbvUYgk3JHySIe28XxC3xIYYpPGQjxwa3GzPw0FN5aN6kerQQTHUBp29Dd+vLSgBaC
2pAFrq059ZvN0ZPN11XG/2RuDY7HaTQu/QffhnY8rVlNxpFmbkVidwtZQahx5qIFu9Uww/tv
o1AvhjaORi898/KiPtOqv7LpsPFbyNuMnZEG48cxtZuesMBJFP/bKtgU2DN69xiT8Pxf+N2n
g0D2ximYzZqwY/4dBQj9dyQDuXRFo40hdqtWw0L96zV6723aQ8Xp0cqBaZj2wWTI4+6Ikry9
zY0Mdm3bV8TYqsOa+zT4fnikGO0eYbTFHEiW9QUbl/UwzuERwk8p

/
--------------------------------------------------------
--  DDL for Function LOGMNR$SEQ_GG_TABF_PUBLIC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE FUNCTION "SYSTEM"."LOGMNR$SEQ_GG_TABF_PUBLIC" wrapped
a000000
1
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
8
249 181
++dDv/cHZatK7/vHG9lvR8DQCpYwg/D3AEhqfHQC2h6ONoOvOeHvTNX1S5GDyajM4j8vkSVz
IMw+LbYS3goujprvmrB/LUpdBF8TVvjEqZpC7MCKPXWcGnTeL7ja8C2tcOdjOpRXkwL5NmPJ
B0KqMvwepdiQDY7HUDQrBddQC1lBqHGEogWkwRJ3+2+jUC+Gpo5GTazIWS0V551NkSl3+h0W
BhkPglLbvQDPzxWTnmu4ZuJIlTiNwTf1R0WxghyyKFjES9CJsCrGT8Fn7prlF4Mr5kx1YBGf
5xaODtRnmVJgb65RlKbAN9+Xxf2QnQjKQL99RZAgsEwGVKNfx9lFKwHLGUwzjOxmIAXXYd/Z
+L9osPQJjZYkNrD0pQ==

/
--------------------------------------------------------
--  DDL for Function LOGMNR$TAB_GG_TABF_PUBLIC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE FUNCTION "SYSTEM"."LOGMNR$TAB_GG_TABF_PUBLIC" wrapped
a000000
1
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
8
22e 181
PRVt0FiLRPgjIhZlCZcQhnOHXQ4wgzJp2UhGfHSKrQ843hKm3gKD9swoFAS4jVcW0CsSl7W1
6banVWdjktOVM18XyRjY4ZM5eRdquSp0ZdfHl3KJPBYqPi9LXIwum30Qh7ymgO+zTKj+R1N2
nSs/TPnknfYLwcUdAfBryDQGEIMisMuE9XT5ix3sudhHa5tLJRjsBIDKlqL7zk2CH0C1NRAZ
XrP7WgavVdNS3Yikz88VupZG21hTuAGspJBgCagmNWIwi9pgCIWP3rxF4p+uMps/ABEg+MBP
6Iykm62kO6hWhVHJXkfKF/jrQFjYBTTzatr1VTcOXt/AFuagDR7isNtb//lnXh8TXyAFWyCT
ubv6GXL0aM0PP/t+DfSl

/
--------------------------------------------------------
--  DDL for Function LOGMNR$USER_GG_TABF_PUBLIC
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE FUNCTION "SYSTEM"."LOGMNR$USER_GG_TABF_PUBLIC" wrapped
a000000
1
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
abcd
8
272 191
Vc+i+Mga8m7/BSlvXl0J+GmParYwg/D319wCfC8CTE6Ot30G8QRR0WzR8ohw8Z/y6DuL4pL5
IDjZApnCaZgeKa1OTjLj2B2tOYZg2ZuOAPKrxo7DeBqtn0Ahw0tubS36jP4xc+d2eQebdJMD
c/U0JxdiAl0qIPzsltBjeoGAEsxUk0aubCMJmysgc2d8ojil6ixQ37D7RA0HWMkh27QdOuXF
vSwuufDunMMT8Hue9dvy4vRXj+PhuyylJSukStsxyIb234EahCXyrjDlnzbC91eoU7v5sb4D
OvtDmggQCEViyhFXwspP9P0dOObin8JENsDJeFZYr/oVAgSHa97LRKvNZgd+f//XHlpEAOP4
rNm5mF0wTCABbb7tc5c7uo09M+79i7en8g==

/
--------------------------------------------------------
--  DDL for Synonymn CATALOG
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."CATALOG" FOR "SYS"."CATALOG";
--------------------------------------------------------
--  DDL for Synonymn COL
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."COL" FOR "SYS"."COL";
--------------------------------------------------------
--  DDL for Synonymn PRODUCT_USER_PROFILE
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."PRODUCT_USER_PROFILE" FOR "SYSTEM"."SQLPLUS_PRODUCT_PROFILE";
--------------------------------------------------------
--  DDL for Synonymn PUBLICSYN
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."PUBLICSYN" FOR "SYS"."PUBLICSYN";
--------------------------------------------------------
--  DDL for Synonymn SYSCATALOG
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."SYSCATALOG" FOR "SYS"."SYSCATALOG";
--------------------------------------------------------
--  DDL for Synonymn SYSFILES
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."SYSFILES" FOR "SYS"."SYSFILES";
--------------------------------------------------------
--  DDL for Synonymn TAB
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."TAB" FOR "SYS"."TAB";
--------------------------------------------------------
--  DDL for Synonymn TABQUOTAS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE SYNONYM "SYSTEM"."TABQUOTAS" FOR "SYS"."TABQUOTAS";
--------------------------------------------------------
--  Constraints for Table SGC_Actas
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Actas" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Actas" MODIFY ("qn_tipoActa" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Actas" MODIFY ("dt_fechaActa" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Actas" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Actas" ADD CONSTRAINT "PK_SGC_Actas" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Contratos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("qn_tipoContrato" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("qn_tipoProceso" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("qn_vigenciaContrato" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("dt_fechaSuscripcion" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("dt_fechaInicio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("dt_fechaFin" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("vm_montoAdjudicado" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("bol_recurrencia" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("qn_proveedor" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("qn_unidadConsolidadora" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("qn_estadoContrato" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Contratos" ADD CONSTRAINT "PK_SGC_Contratos" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Entregables
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Entregables" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Entregables" MODIFY ("qn_tipoEntregable" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Entregables" MODIFY ("qn_cantidadEntregable" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Entregables" MODIFY ("dt_fechaEntregable" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Entregables" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Entregables" ADD CONSTRAINT "PK_SGC_Entregables" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_FechaModificado
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_FechaModificado" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_FechaModificado" MODIFY ("dt_fechaAnterior" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_FechaModificado" MODIFY ("dt_fechaActual" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_FechaModificado" ADD CONSTRAINT "PK_SGC_FechaModificado" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_FormaPago
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_FormaPago" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_FormaPago" MODIFY ("qn_tipoPago" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_FormaPago" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_FormaPago" ADD CONSTRAINT "PK_SGC_FormaPago" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Garantias
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Garantias" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Garantias" MODIFY ("qn_tipoGarantia" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Garantias" MODIFY ("vm_valorGarantia" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Garantias" MODIFY ("dt_inicioGarantia" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Garantias" MODIFY ("dt_finGarantia" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Garantias" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Garantias" ADD CONSTRAINT "PK_SGC_Garantias" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Historial
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Historial" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Historial" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Historial" ADD CONSTRAINT "PK_SGC_Historial" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Informes
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Informes" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Informes" MODIFY ("qn_tipoInforme" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Informes" MODIFY ("dt_fechaInforme" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Informes" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Informes" ADD CONSTRAINT "PK_SGC_Informes" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Modificaciones
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Modificaciones" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Modificaciones" MODIFY ("qn_tipoModificacion" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Modificaciones" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Modificaciones" ADD CONSTRAINT "PK_SGC_Modificaciones" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Multas
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Multas" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Multas" MODIFY ("qn_tipoMulta" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Multas" MODIFY ("vm_montoMulta" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Multas" MODIFY ("dt_fechaMulta" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Multas" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Multas" ADD CONSTRAINT "PK_SGC_Multas" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Pagos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("qn_porcentajePago" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("bol_esAnticipo" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("vm_montoPago" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("dt_tentativaPago" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("dt_realPago" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Pagos" ADD CONSTRAINT "PK_SGC_Pagos" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Rols
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Rols" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Rols" ADD CONSTRAINT "PK_SGC_Rols" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Secciones
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Secciones" MODIFY ("seccionID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Secciones" ADD CONSTRAINT "PK_SGC_Secciones" PRIMARY KEY ("seccionID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Solicitudes
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Solicitudes" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Solicitudes" MODIFY ("qn_cantContratos" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Solicitudes" MODIFY ("qn_estadoSolicitud" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Solicitudes" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Solicitudes" ADD CONSTRAINT "PK_SGC_Solicitudes" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Tipos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Tipos" MODIFY ("tipoID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Tipos" ADD CONSTRAINT "PK_SGC_Tipos" PRIMARY KEY ("tipoID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_UserRol
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_UserRol" MODIFY ("userID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_UserRol" MODIFY ("rolID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_UserRol" ADD CONSTRAINT "PK_SGC_UserRol" PRIMARY KEY ("userID", "rolID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Users
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Users" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Users" ADD CONSTRAINT "PK_SGC_Users" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_ValorModificado
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_ValorModificado" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_ValorModificado" MODIFY ("vm_valorAnterior" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_ValorModificado" MODIFY ("vm_valorActual" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_ValorModificado" ADD CONSTRAINT "PK_SGC_ValorModificado" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SGC_Vencimientos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Vencimientos" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Vencimientos" MODIFY ("dt_fechaVencimiento" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Vencimientos" MODIFY ("qn_diasAnticipacion" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Vencimientos" MODIFY ("qn_frecuenciaAnticipacion" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Vencimientos" MODIFY ("dt_fechaUltimoCambio" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."SGC_Vencimientos" ADD CONSTRAINT "PK_SGC_Vencimientos" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Actas
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Actas" ADD CONSTRAINT "FK_SGC_Actas_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Contratos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Contratos" ADD CONSTRAINT "FK_SGC_Contratos_SGC_Solicitudes_solicitudID" FOREIGN KEY ("solicitudID")
	  REFERENCES "SYSTEM"."SGC_Solicitudes" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Entregables
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Entregables" ADD CONSTRAINT "FK_SGC_Entregables_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_FechaModificado
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_FechaModificado" ADD CONSTRAINT "FK_SGC_FechaModificado_SGC_Modificaciones_ID" FOREIGN KEY ("ID")
	  REFERENCES "SYSTEM"."SGC_Modificaciones" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_FormaPago
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_FormaPago" ADD CONSTRAINT "FK_SGC_FormaPago_SGC_Contratos_ID" FOREIGN KEY ("ID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Garantias
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Garantias" ADD CONSTRAINT "FK_SGC_Garantias_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Historial
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Historial" ADD CONSTRAINT "FK_SGC_Historial_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Informes
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Informes" ADD CONSTRAINT "FK_SGC_Informes_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Modificaciones
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Modificaciones" ADD CONSTRAINT "FK_SGC_Modificaciones_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Multas
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Multas" ADD CONSTRAINT "FK_SGC_Multas_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Pagos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Pagos" ADD CONSTRAINT "FK_SGC_Pagos_SGC_FormaPago_formaPagoID" FOREIGN KEY ("formaPagoID")
	  REFERENCES "SYSTEM"."SGC_FormaPago" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Solicitudes
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Solicitudes" ADD CONSTRAINT "FK_SGC_Solicitudes_SGC_Users_userID" FOREIGN KEY ("userID")
	  REFERENCES "SYSTEM"."SGC_Users" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Tipos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Tipos" ADD CONSTRAINT "FK_SGC_Tipos_SGC_Secciones_seccionID" FOREIGN KEY ("seccionID")
	  REFERENCES "SYSTEM"."SGC_Secciones" ("seccionID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_UserRol
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_UserRol" ADD CONSTRAINT "FK_SGC_UserRol_SGC_Rols_rolID" FOREIGN KEY ("rolID")
	  REFERENCES "SYSTEM"."SGC_Rols" ("ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "SYSTEM"."SGC_UserRol" ADD CONSTRAINT "FK_SGC_UserRol_SGC_Users_userID" FOREIGN KEY ("userID")
	  REFERENCES "SYSTEM"."SGC_Users" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_ValorModificado
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_ValorModificado" ADD CONSTRAINT "FK_SGC_ValorModificado_SGC_Modificaciones_ID" FOREIGN KEY ("ID")
	  REFERENCES "SYSTEM"."SGC_Modificaciones" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SGC_Vencimientos
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SGC_Vencimientos" ADD CONSTRAINT "FK_SGC_Vencimientos_SGC_Contratos_contratoID" FOREIGN KEY ("contratoID")
	  REFERENCES "SYSTEM"."SGC_Contratos" ("ID") ENABLE;
