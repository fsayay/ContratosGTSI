using Microsoft.EntityFrameworkCore.Migrations;

namespace SGContrato.Migrations
{
    public partial class masCambios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "txt_token",
                table: "AC_Users",
                newName: "txt_nombre");

            migrationBuilder.RenameColumn(
                name: "txt_emailAlterno",
                table: "AC_Users",
                newName: "txt_apellido");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "txt_nombre",
                table: "AC_Users",
                newName: "txt_token");

            migrationBuilder.RenameColumn(
                name: "txt_apellido",
                table: "AC_Users",
                newName: "txt_emailAlterno");
        }
    }
}
