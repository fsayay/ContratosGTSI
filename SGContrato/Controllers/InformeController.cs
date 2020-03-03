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
    public class InformeController : ControllerBase
    {
        private readonly MyDBContext _context;

        public InformeController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Informe
        // GET: api/Informe
        [HttpGet]
        public IEnumerable<Informe> GetInforme()
        {
            return _context.AC_Informes;
        }

        // Select * from Informe where contratoId=1
        // GET: api/Informe/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInforme([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.informes).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        // PUT: api/Informe/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInforme([FromRoute] int id, [FromBody] Informe informe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != informe.ID)
            {
                return BadRequest();
            }

            _context.Entry(informe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InformeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(informe);
        }

        // POST: api/Informe
        [HttpPost]
        public async Task<IActionResult> PostInforme([FromBody] Informe informe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Informes.Add(informe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInforme", new { id = informe.ID }, informe);
        }

    // DELETE: api/Informe/5
    [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInforme([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var informe = await _context.AC_Informes.FindAsync(id);
            if (informe == null)
            {
                return NotFound();
            }

            _context.AC_Informes.Remove(informe);
            await _context.SaveChangesAsync();

            return Ok(informe);
        }

        private bool InformeExists(int id)
        {
            return _context.AC_Contratos.Any(e => e.ID == id);
        }
    }
}
