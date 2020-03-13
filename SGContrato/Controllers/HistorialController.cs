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
    public class HistorialController : ControllerBase
    {
        private readonly MyDBContext _context;
        public HistorialController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Historial
        // GET: api/Historial
        [HttpGet]
        public IEnumerable<Historial> GetHistorial()
        {
            return _context.AC_Historial;
        }

        // Select * from Historial where contratoId=1
        // GET: api/Historial/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHistorial([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.historial).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        // POST: api/Historial
        [HttpPost]
        public async Task<IActionResult> PostHistorial([FromBody] Historial historial)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Historial.Add(historial);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHistorial", new { id = historial.ID }, historial);
        }

        private bool HistorialExists(int id)
        {
            return _context.AC_Contratos.Any(e => e.ID == id);
        }
    }
}