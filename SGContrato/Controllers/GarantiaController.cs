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
    public class GarantiaController : ControllerBase
    {
        private readonly MyDBContext _context;

        public GarantiaController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from garantia
        // GET: api/Garantia
        [HttpGet]
        public IEnumerable<Garantia> Getgarantia()
        {
            return _context.AC_Garantias;
        }

        // GET: api/Contrato/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGarantia([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.garantias).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        // PUT: api/Garantia/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGarantia([FromRoute] int id, [FromBody] Garantia garantia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != garantia.ID)
            {
                return BadRequest();
            }

            _context.Entry(garantia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GarantiaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(garantia);
        }

        // POST: api/Garantia
        [HttpPost]
        public async Task<IActionResult> PostGarantia([FromBody] Garantia garantia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Garantias.Add(garantia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGarantia", new { id = garantia.ID }, garantia);
        }

        // DELETE: api/Garantia/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGarantia([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var garantia = await _context.AC_Garantias.FindAsync(id);
            if (garantia == null)
            {
                return NotFound();
            }

            _context.AC_Garantias.Remove(garantia);
            await _context.SaveChangesAsync();

            return Ok(garantia);
        }

        private bool GarantiaExists(int id)
        {
            return _context.AC_Garantias.Any(e => e.ID == id);
        }        
    }
}