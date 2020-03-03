using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SGContrato.Migrations
{
    public partial class cambiosContratoNull : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "txt_archivoPago",
                table: "AC_FormaPago");

            migrationBuilder.DropColumn(
                name: "qn_proveedor",
                table: "AC_Contratos");

            migrationBuilder.AlterColumn<int>(
                name: "userRolID",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "qn_unidadConsolidadora",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "qn_tipoProceso",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "qn_tipoContrato",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "qn_estadoTransferencia",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "qn_estadoContrato",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<DateTime>(
                name: "dt_fechaInicio",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "dt_fechaFin",
                table: "AC_Contratos",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AddColumn<string>(
                name: "txt_nombreProveedor",
                table: "AC_Contratos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "txt_rucProveedor",
                table: "AC_Contratos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "txt_nombreProveedor",
                table: "AC_Contratos");

            migrationBuilder.DropColumn(
                name: "txt_rucProveedor",
                table: "AC_Contratos");

            migrationBuilder.AddColumn<string>(
                name: "txt_archivoPago",
                table: "AC_FormaPago",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "userRolID",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "qn_unidadConsolidadora",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "qn_tipoProceso",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "qn_tipoContrato",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "qn_estadoTransferencia",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "qn_estadoContrato",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "dt_fechaInicio",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "dt_fechaFin",
                table: "AC_Contratos",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "qn_proveedor",
                table: "AC_Contratos",
                nullable: false,
                defaultValue: 0);
        }
    }
}
