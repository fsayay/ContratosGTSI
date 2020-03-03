using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        // GET: api/Solicitud
        [HttpGet]
        public IEnumerable<Solicitud> GetBlogPosts()
        {
            return _context.AC_Solicitudes.OrderByDescending(s => s.ID);
        }

        // GET: api/Solicitud/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSolicitud([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var solicitud = await _context.AC_Solicitudes.FindAsync(id);

            if (solicitud == null)
            {
                return NotFound();
            }

            return Ok(solicitud);
        }

    }
}
