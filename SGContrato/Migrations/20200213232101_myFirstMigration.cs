using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Oracle.EntityFrameworkCore.Metadata;

namespace SGContrato.Migrations
{
    public partial class myFirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AC_Rols",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_rolName = table.Column<string>(nullable: true),
                    txt_rolDetaile = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Rols", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AC_Secciones",
                columns: table => new
                {
                    seccionID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_nombreSeccion = table.Column<string>(nullable: true),
                    txt_detalleSeccion = table.Column<string>(nullable: true),
                    bol_estadoSeccion = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Secciones", x => x.seccionID);
                });

            migrationBuilder.CreateTable(
                name: "AC_Users",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_username = table.Column<string>(nullable: true),
                    txt_emailAlterno = table.Column<string>(nullable: true),
                    txt_token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Users", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AC_Tipos",
                columns: table => new
                {
                    tipoID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_nombreTipo = table.Column<string>(nullable: true),
                    txt_detalleTipo = table.Column<string>(nullable: true),
                    seccionID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Tipos", x => x.tipoID);
                    table.ForeignKey(
                        name: "FK_AC_Tipos_AC_Secciones_seccionID",
                        column: x => x.seccionID,
                        principalTable: "AC_Secciones",
                        principalColumn: "seccionID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Solicitudes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_codigoSolicitud = table.Column<string>(nullable: true),
                    qn_cantContratos = table.Column<int>(nullable: false),
                    txt_motivoSolicitud = table.Column<string>(nullable: true),
                    txt_admRecomendado = table.Column<string>(nullable: true),
                    qn_estadoSolicitud = table.Column<int>(nullable: false),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    userID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Solicitudes", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Solicitudes_AC_Users_userID",
                        column: x => x.userID,
                        principalTable: "AC_Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_UserRol",
                columns: table => new
                {
                    userID = table.Column<int>(nullable: false),
                    rolID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_UserRol", x => new { x.userID, x.rolID });
                    table.ForeignKey(
                        name: "FK_AC_UserRol_AC_Rols_rolID",
                        column: x => x.rolID,
                        principalTable: "AC_Rols",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AC_UserRol_AC_Users_userID",
                        column: x => x.userID,
                        principalTable: "AC_Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Contratos",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_codigoContrato = table.Column<string>(nullable: true),
                    qn_tipoContrato = table.Column<int>(nullable: false),
                    txt_numProceso = table.Column<string>(nullable: true),
                    qn_tipoProceso = table.Column<int>(nullable: false),
                    qn_vigenciaContrato = table.Column<int>(nullable: false),
                    dt_fechaSuscripcion = table.Column<DateTime>(nullable: false),
                    dt_fechaInicio = table.Column<DateTime>(nullable: false),
                    dt_fechaFin = table.Column<DateTime>(nullable: false),
                    vm_montoAdjudicado = table.Column<double>(nullable: false),
                    bol_recurrencia = table.Column<bool>(nullable: false),
                    qn_proveedor = table.Column<int>(nullable: false),
                    txt_objetoContratacion = table.Column<string>(nullable: true),
                    qn_unidadConsolidadora = table.Column<int>(nullable: false),
                    txt_nombreDelegado = table.Column<string>(nullable: true),
                    userRolID = table.Column<int>(nullable: false),
                    txt_nombreTecnicoExterno = table.Column<string>(nullable: true),
                    txt_detalleFormaPago = table.Column<string>(nullable: true),
                    txt_detalleGarantias = table.Column<string>(nullable: true),
                    txt_archivoContrato = table.Column<string>(nullable: true),
                    qn_estadoContrato = table.Column<int>(nullable: false),
                    qn_estadoTransferencia = table.Column<int>(nullable: false),
                    txt_codigoTransferencia = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    UserRolrolID = table.Column<int>(nullable: true),
                    UserRoluserID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Contratos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Contratos_AC_UserRol_UserRoluserID_UserRolrolID",
                        columns: x => new { x.UserRoluserID, x.UserRolrolID },
                        principalTable: "AC_UserRol",
                        principalColumns: new[] { "userID", "rolID" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AC_Actas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoActa = table.Column<int>(nullable: false),
                    txt_codigoActa = table.Column<string>(nullable: true),
                    dt_fechaActa = table.Column<DateTime>(nullable: false),
                    txt_archivoActa = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Actas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Actas_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Entregables",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoEntregable = table.Column<int>(nullable: false),
                    qn_cantidadEntregable = table.Column<int>(nullable: false),
                    dt_fechaEntregable = table.Column<DateTime>(nullable: false),
                    txt_archivoEntregable = table.Column<string>(nullable: true),
                    txt_descripcionEntregable = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Entregables", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Entregables_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_FormaPago",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoPago = table.Column<int>(nullable: false),
                    txt_archivoPago = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_FormaPago", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_FormaPago_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Garantias",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoGarantia = table.Column<int>(nullable: false),
                    vm_valorGarantia = table.Column<double>(nullable: false),
                    txt_codigoGarantia = table.Column<string>(nullable: true),
                    txt_proveedorGarantia = table.Column<string>(nullable: true),
                    dt_inicioGarantia = table.Column<DateTime>(nullable: false),
                    dt_finGarantia = table.Column<DateTime>(nullable: false),
                    txt_archivoGarantia = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Garantias", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Garantias_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Historial",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_seccionHistorial = table.Column<string>(nullable: true),
                    txt_accionHistorial = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Historial", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Historial_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Informes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoInforme = table.Column<int>(nullable: false),
                    txt_codigoInforme = table.Column<string>(nullable: true),
                    dt_fechaInforme = table.Column<DateTime>(nullable: false),
                    txt_archivoInforme = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Informes", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Informes_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Modificaciones",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoModificacion = table.Column<int>(nullable: false),
                    txt_motivoModificacion = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Modificaciones", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Modificaciones_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Multas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_tipoMulta = table.Column<int>(nullable: false),
                    vm_montoMulta = table.Column<double>(nullable: false),
                    txt_motivoMulta = table.Column<string>(nullable: true),
                    dt_fechaMulta = table.Column<DateTime>(nullable: false),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    txt_codigoInforme = table.Column<string>(nullable: true),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Multas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Multas_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Vencimientos",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    txt_nombreSeccion = table.Column<string>(nullable: true),
                    txt_nombreTipo = table.Column<string>(nullable: true),
                    dt_fechaVencimiento = table.Column<DateTime>(nullable: false),
                    qn_diasAnticipacion = table.Column<int>(nullable: false),
                    qn_frecuenciaAnticipacion = table.Column<int>(nullable: false),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    contratoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Vencimientos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Vencimientos_AC_Contratos_contratoID",
                        column: x => x.contratoID,
                        principalTable: "AC_Contratos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_Pagos",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    qn_porcentajePago = table.Column<float>(nullable: false),
                    bol_esAnticipo = table.Column<bool>(nullable: false),
                    vm_montoPago = table.Column<double>(nullable: false),
                    dt_tentativaPago = table.Column<DateTime>(nullable: false),
                    dt_realPago = table.Column<DateTime>(nullable: false),
                    txt_comprobantePago = table.Column<string>(nullable: true),
                    dt_fechaUltimoCambio = table.Column<DateTime>(nullable: false),
                    formaPagoID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_Pagos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_Pagos_AC_FormaPago_formaPagoID",
                        column: x => x.formaPagoID,
                        principalTable: "AC_FormaPago",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_FechaModificado",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    dt_fechaAnterior = table.Column<DateTime>(nullable: false),
                    dt_fechaActual = table.Column<DateTime>(nullable: false),
                    modificacionID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_FechaModificado", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_FechaModificado_AC_Modificaciones_modificacionID",
                        column: x => x.modificacionID,
                        principalTable: "AC_Modificaciones",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AC_ValorModificado",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    vm_valorAnterior = table.Column<double>(nullable: false),
                    vm_valorActual = table.Column<double>(nullable: false),
                    modificacionID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AC_ValorModificado", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AC_ValorModificado_AC_Modificaciones_modificacionID",
                        column: x => x.modificacionID,
                        principalTable: "AC_Modificaciones",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AC_Actas_contratoID",
                table: "AC_Actas",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Contratos_UserRoluserID_UserRolrolID",
                table: "AC_Contratos",
                columns: new[] { "UserRoluserID", "UserRolrolID" });

            migrationBuilder.CreateIndex(
                name: "IX_AC_Entregables_contratoID",
                table: "AC_Entregables",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_FechaModificado_modificacionID",
                table: "AC_FechaModificado",
                column: "modificacionID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AC_FormaPago_contratoID",
                table: "AC_FormaPago",
                column: "contratoID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AC_Garantias_contratoID",
                table: "AC_Garantias",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Historial_contratoID",
                table: "AC_Historial",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Informes_contratoID",
                table: "AC_Informes",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Modificaciones_contratoID",
                table: "AC_Modificaciones",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Multas_contratoID",
                table: "AC_Multas",
                column: "contratoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Pagos_formaPagoID",
                table: "AC_Pagos",
                column: "formaPagoID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Solicitudes_userID",
                table: "AC_Solicitudes",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_Tipos_seccionID",
                table: "AC_Tipos",
                column: "seccionID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_UserRol_rolID",
                table: "AC_UserRol",
                column: "rolID");

            migrationBuilder.CreateIndex(
                name: "IX_AC_ValorModificado_modificacionID",
                table: "AC_ValorModificado",
                column: "modificacionID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AC_Vencimientos_contratoID",
                table: "AC_Vencimientos",
                column: "contratoID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AC_Actas");

            migrationBuilder.DropTable(
                name: "AC_Entregables");

            migrationBuilder.DropTable(
                name: "AC_FechaModificado");

            migrationBuilder.DropTable(
                name: "AC_Garantias");

            migrationBuilder.DropTable(
                name: "AC_Historial");

            migrationBuilder.DropTable(
                name: "AC_Informes");

            migrationBuilder.DropTable(
                name: "AC_Multas");

            migrationBuilder.DropTable(
                name: "AC_Pagos");

            migrationBuilder.DropTable(
                name: "AC_Solicitudes");

            migrationBuilder.DropTable(
                name: "AC_Tipos");

            migrationBuilder.DropTable(
                name: "AC_ValorModificado");

            migrationBuilder.DropTable(
                name: "AC_Vencimientos");

            migrationBuilder.DropTable(
                name: "AC_FormaPago");

            migrationBuilder.DropTable(
                name: "AC_Secciones");

            migrationBuilder.DropTable(
                name: "AC_Modificaciones");

            migrationBuilder.DropTable(
                name: "AC_Contratos");

            migrationBuilder.DropTable(
                name: "AC_UserRol");

            migrationBuilder.DropTable(
                name: "AC_Rols");

            migrationBuilder.DropTable(
                name: "AC_Users");
        }
    }
}
