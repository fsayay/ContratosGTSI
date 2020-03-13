using ServiceReference;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WebCertificadosApp.Services
{
    public interface IUserService
    {
        Task<ClaimsIdentity> GetClaimsIdentity(string username, string authenticationScheme);
    }
    public class UserService : IUserService
    {
        private wsandroidSoapClient auth = new wsandroidSoapClient(wsandroidSoapClient.EndpointConfiguration.wsandroidSoap);

        /*
         * object IServiceProvider.GetService(Type serviceType)
        {
            throw new NotImplementedException();
        }
        */
        public async Task<ClaimsIdentity> GetClaimsIdentity(string username, string authenticationScheme)
        {
            wsInfoUsuarioResponse response;
            //autenticacionResponse response;
            //string strRoles;
            //string strSistemas;
            GTSIAuthSoapHeader headers = new GTSIAuthSoapHeader();
            headers.usuario = "test";
            headers.key = "nJcdurPvvh|pPxcrWTDKp~}z6f%kJC";
            try
            {
                List<Claim> claims = new List<Claim>();
                response = await auth.wsInfoUsuarioAsync(headers, username);
                //response.wsInfoUsuarioResult;
                //response = await auth.autenticacionAsync(headers, "fsayay", "Geovanny2185");
                //if(response.autenticacionResult){
                //    wsInfoUsuarioResponse userInfoResponse;
                //    userInfoResponse = await auth.wsInfoUsuarioAsync(headers,"fsayay");
                //    claims.Add(new Claim(ClaimTypes.Email,userInfoResponse.wsInfoUsuarioResult.ToString()));
                //}
                /*strRoles = await ws.RolesCertificadosAsync(username);
                strSistemas = await ws.SistemasMiEspolAsync(username);

                UserData respuesta = response.autenticacioncedidResult;
                List<Claim> claims = new List<Claim>();
                if (respuesta.valido)
                {
                    claims.Add(new Claim(ClaimTypes.Email, respuesta.usuario.ToLower() + "@espol.edu.ec"));
                    claims.Add(new Claim("cedula", respuesta.cedula));
                    string[] roles = strRoles.TrimEnd(';').Split(";");
                    string[] sistemas = strSistemas.TrimEnd(';').Split(";");

                    foreach (var role in roles)
                    {
                        claims.Add(new Claim(ClaimTypes.Role, role));
                    }

                    foreach (var sistema in sistemas)
                    {
                        claims.Add(new Claim("sistema", sistema));
                    }
                }*/
                claims.Add(new Claim(ClaimTypes.NameIdentifier, username));
                claims.Add(new Claim(ClaimTypes.Email, username));


                return new ClaimsIdentity(claims, authenticationScheme);
            }
            catch(Exception ex)
            {
                Console.WriteLine("excepcion=" + ex.Message);
                return new ClaimsIdentity(new List<Claim> { new Claim(ClaimTypes.Name, username) });
            }
            
        }
    }
}
