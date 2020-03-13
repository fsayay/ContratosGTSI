using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SGContrato.Models;

namespace SGContrato.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        private readonly MyDBContext _context;
        public LoginController(IConfiguration configuration, MyDBContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [AllowAnonymous]
        [Route("login")]
        public async Task Login(string returnUrl) {


            returnUrl = _configuration["returnURL"];
            //returnUrl = "http://192.168.6.144/";
            
            var props = new AuthenticationProperties { RedirectUri = returnUrl };
            
            await HttpContext.ChallengeAsync("CAS", props);
        }

        [HttpGet("getUser")]
        public IActionResult GetUser()
        {
            Dictionary<string, object> info = new Dictionary<string, object>();

            if (this.User.Identity.IsAuthenticated)
            {
                foreach (var claim in this.User.Claims.TakeWhile(c => this.User.Claims.Count(x => c.Type == x.Type) == 1))
                {
                    int index = claim.Type.Contains('/') ? claim.Type.LastIndexOf('/') + 1 : 0;
                    info.Add(claim.Type.Substring(index), claim.Value);
                }
                
                //var usuario = _context.AC_Users.Where(x => x.txt_username == this.User.Identity.Name).ToList();
                var usuario = _context.SG_UsuariosViews.Where(x => x.Usuario == this.User.Identity.Name).ToList();

                info.Add("user", this.User.Identity.Name);
                info.Add("usuario", usuario);
                info.Add("ultimoAcceso", DateTime.Now);
                return Ok(info);
            }
            return NotFound();
        }

        [HttpGet("logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return Redirect($"{_configuration["CasBaseUrl"]}/logout");
        }
    }
    
}