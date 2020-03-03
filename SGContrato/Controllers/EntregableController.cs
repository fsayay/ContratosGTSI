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
    public class EntregableController : ControllerBase
    {
        private readonly MyDBContext _context;

        public EntregableController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Entregable
        // GET: api/Entregable
        [HttpGet]
        public IEnumerable<Entregable> Getentregable()
        {
            return _context.AC_Entregables;
        }

        // select * 
        // GET: api/Entregable/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEntregable([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.entregables).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }
        
        // PUT: api/Entregable/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEntregable([FromRoute] int id, [FromBody] Entregable entregable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != entregable.ID)
            {
                return BadRequest();
            }

            _context.Entry(entregable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntregableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(entregable);
        }

        // POST: api/Entregable
        [HttpPost]
        public async Task<IActionResult> PostEntregable([FromBody] Entregable entregable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Entregables.Add(entregable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEntregable", new { id = entregable.ID }, entregable);
        }

        // DELETE: api/Entregable/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntregable([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entregable = await _context.AC_Entregables.FindAsync(id);
            if (entregable == null)
            {
                return NotFound();
            }

            _context.AC_Entregables.Remove(entregable);
            await _context.SaveChangesAsync();

            return Ok(entregable);
        }

        private bool EntregableExists(int id)
        {
            return _context.AC_Contratos.Any(e => e.ID == id);
        }
    }
}