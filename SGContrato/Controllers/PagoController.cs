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
    public class PagoController : ControllerBase
    {
        private readonly MyDBContext _context;

        public PagoController(MyDBContext context)
        {
            _context = context;
        }

        // Select * from Pago
        // GET: api/Pago
        [HttpGet]
        public IEnumerable<Pago> GetPago()
        {
            return _context.AC_Pagos;
        }

        // Select * from Pago where formaPagoId=1
        // GET: api/Pago/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPago([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FormaPago formaPago;

            formaPago = await _context.AC_FormaPago.Include(m => m.pagos).SingleOrDefaultAsync(c => c.ID == id);

            if (formaPago == null)
            {
                return NotFound();
            }
            return Ok(formaPago);
        }

        // PUT: api/Pago/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPago([FromRoute] int id, [FromBody] Pago pago)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pago.ID)
            {
                return BadRequest();
            }

            _context.Entry(pago).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PagoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Ok(pago);
        }

        // POST: api/Pago
        [HttpPost]
        public async Task<IActionResult> PostPago([FromBody] Pago pago)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Pagos.Add(pago);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPago", new { id = pago.ID }, pago);
        }

        // DELETE: api/Pago/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePago([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pago = await _context.AC_Pagos.FindAsync(id);
            if (pago == null)
            {
                return NotFound();
            }

            _context.AC_Pagos.Remove(pago);
            await _context.SaveChangesAsync();

            return Ok(pago);
        }

        private bool PagoExists(int id)
        {
            return _context.AC_Pagos.Any(e => e.ID == id);
        }
    }
}
