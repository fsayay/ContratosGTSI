ALTER TABLE "vencimientos" ADD "txt_nombreSeccion" NVARCHAR2(2000)
/

ALTER TABLE "vencimientos" ADD "txt_nombreTipo" NVARCHAR2(2000)
/

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES (N'20191226005358_Agrego-Columnas-Vencimiento', N'2.1.11-servicing-32099')
/

