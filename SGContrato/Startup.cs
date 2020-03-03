using AspNetCore.Security.CAS;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SGContrato.Models;
using System;
using WebCertificadosApp.Services;

namespace SGContrato
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        readonly string myPages = "_myPages";
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(myPages,
                builder =>
                {
                    builder.WithOrigins("http://localhost:5001/contratos",
                                        "http://localhost:5001/Configuracion");
                });
            });

            services.AddMvc().SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Latest);

            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            services.AddScoped<IUserService, UserService>();
            // Configuracion de CAS para autenticacion
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.LoginPath = new PathString("/login");
                    options.AccessDeniedPath = new PathString("/access-denied");
                    options.Events = new CookieAuthenticationEvents
                    {
                        OnSigningIn = context =>
                        {
                            // Use `GetRequiredService` if you have a service that is using DI or an EF Context.
                            var username = context.Principal.Identity.Name;
                            Console.WriteLine(username);
                            var userSvc = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
                            var identityResult = userSvc.GetClaimsIdentity(username, CookieAuthenticationDefaults.AuthenticationScheme);
                            // `AddClaim` is not available directly from `context.Principal.Identity`.
                            // We can add a new empty identity with the roles we want to the principal. 
                            context.Principal.AddIdentity(identityResult.Result);
                            return Task.FromResult(0);
                        }
                    };

                })
                .AddCAS(options =>
                {
                    options.CasServerUrlBase = Configuration["CasBaseUrl"];   // Set in `appsettings.json` file.
                    options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    //options.SaveTokens = true;
                });

            //Conection to OracleDB
            //var connection = @"User Id=SYSTEM;Password=admin;Data Source=localhost:1521/xe";
            var connection = @"User Id=" + Configuration["UserDatabase"] + ";Password=" + Configuration["PasswordDatabase"] + ";Data Source=" + Configuration["ServerDatabase"] + "/" + Configuration["SID"];

            services.AddDbContext<MyDBContext>(option => option.UseOracle(connection));
            
            services.AddControllers().AddNewtonsoftJson();

            //services.AddControllers().AddJsonOptions(option => options.JsonSerializerOptions.Converters.Add(new IntToStringConverter()));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            
            
            app.UseStaticFiles();
            
            
            app.UseSpaStaticFiles();
                       
            // Usando Autenticacion de CAS
            app.UseAuthentication();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });


            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(200);
                }
            });
        }
    }
}
