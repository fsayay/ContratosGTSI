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
    public class VencimientoController : ControllerBase
    {
        private readonly MyDBContext _context;

        public VencimientoController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Vencimiento
        // GET: api/Vencimiento
        [HttpGet]
        public IEnumerable<Vencimiento> GetVencimiento()
        {
            return _context.AC_Vencimientos;
        }

        // Select * from Vencimiento where contratoId=1
        // GET: api/Vencimiento/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVencimiento([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(v => v.vencimientos).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        // PUT: api/Vencimiento/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVencimiento([FromRoute] int id, [FromBody] Vencimiento vencimiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vencimiento.ID)
            {
                return BadRequest();
            }

            _context.Entry(vencimiento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VencimientoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(vencimiento);
        }

        // POST: api/Vencimiento
        [HttpPost]
        public async Task<IActionResult> PostVencimiento([FromBody] Vencimiento vencimientos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Vencimientos.Add(vencimientos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVencimiento", new { id = vencimientos.ID }, vencimientos);
        }

        // DELETE: api/Vencimiento/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVencimiento([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var vencimientos = await _context.AC_Vencimientos.FindAsync(id);
            if (vencimientos == null)
            {
                return NotFound();
            }

            _context.AC_Vencimientos.Remove(vencimientos);
            await _context.SaveChangesAsync();

            return Ok(vencimientos);
        }

        private bool VencimientoExists(int id)
        {
            return _context.AC_Vencimientos.Any(v => v.ID == id);
        }
    }
}
