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
    public class MultaController : ControllerBase
    {
        private readonly MyDBContext _context;

        public MultaController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Multa
        // GET: api/Multa
        [HttpGet]
        public IEnumerable<Multa> GetMulta()
        {
            return _context.AC_Multas;
        }

        // Select * from Multa where contratoId=1
        // GET: api/Multa/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMulta([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.multas).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        // PUT: api/Multa/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMulta([FromRoute] int id, [FromBody] Multa multa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != multa.ID)
            {
                return BadRequest();
            }

            _context.Entry(multa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MultaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(multa);
        }

        // POST: api/Multa
        [HttpPost]
        public async Task<IActionResult> PostMulta([FromBody] Multa multa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Multas.Add(multa);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMulta", new { id = multa.ID }, multa);
        }

        // DELETE: api/Multa/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMulta([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var multa = await _context.AC_Multas.FindAsync(id);
            if (multa == null)
            {
                return NotFound();
            }

            _context.AC_Multas.Remove(multa);
            await _context.SaveChangesAsync();

            return Ok(multa);
        }

        private bool MultaExists(int id)
        {
            return _context.AC_Multas.Any(e => e.ID == id);
        }
    }
}
