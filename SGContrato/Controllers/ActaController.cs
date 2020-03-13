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
    public class ActaController : ControllerBase
    {
        private readonly MyDBContext _context;

        public ActaController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Acta
        // GET: api/Acta
        [HttpGet]
        public IEnumerable<Acta> GetActa()
        {
            return _context.AC_Actas;
        }

        // Select * from Acta where contratoId=1
        // GET: api/Acta/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetActa([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.actas).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        // PUT: api/Acta/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActa([FromRoute] int id, [FromBody] Acta acta)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != acta.ID)
            {
                return BadRequest();
            }

            _context.Entry(acta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(acta);
        }
        // POST: api/Acta
        [HttpPost]
        public async Task<IActionResult> PostActa([FromBody] Acta acta)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Actas.Add(acta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActa", new { id = acta.ID }, acta);
        }

        // DELETE: api/Acta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActa([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var acta = await _context.AC_Actas.FindAsync(id);
            if (acta == null)
            {
                return NotFound();
            }

            _context.AC_Actas.Remove(acta);
            await _context.SaveChangesAsync();

            return Ok(acta);
        }

        private bool ActaExists(int id)
        {
            return _context.AC_Actas.Any(e => e.ID == id);
        }
    }
}
