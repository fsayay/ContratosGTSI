using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SGContrato.Models;

namespace SGContrato.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolicitudController : ControllerBase
    {

        private readonly MyDBContext _context;

        public SolicitudController(MyDBContext context)
        {
            _context = context;
        }
        //Solicitudes por id Usuario del UAS
        // GET: api/Solicitud/id
        [HttpGet("{id}")]
        public IEnumerable<Solicitud> GetSolicitud([FromRoute] int id)
        {
            return _context.AC_Solicitudes.Where(s => s.qn_usuarioUAS == id).OrderByDescending(s => s.ID);
        }

        // POST: api/Solicitud
        [HttpPost]
        public async Task<IActionResult> PostSolicitud([FromBody] Solicitud solicitud)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Solicitudes.Add(solicitud);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSolicitud", new { id = solicitud.ID }, solicitud);
        }
        

    }
}
