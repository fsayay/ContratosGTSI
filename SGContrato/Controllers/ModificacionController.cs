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
    public class ModificacionController : ControllerBase
    {
        private readonly MyDBContext _context;

        public ModificacionController(MyDBContext context)
        {
            _context = context;
        }

        // GET: api/Modificacion
        [HttpGet]
        public IEnumerable<Modificacion> GetModificacion()
        {
            return _context.AC_Modificaciones;
        }

        // GET: api/Modificacion/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetModificacion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Contrato contrato;

            contrato = await _context.AC_Contratos.Include(m => m.modificaciones).SingleOrDefaultAsync(c => c.ID == id);

            if (contrato == null)
            {
                return NotFound();
            }

            return Ok(contrato);
        }

        private async Task CrearOEditarFecha(FechaModificado fecha)
        {
            if (fecha.ID==0)
            {
                await _context.AddRangeAsync(fecha);
            }
            if (fecha.ID!=0)
            {
                _context.UpdateRange(fecha);
            }
        }
        private async Task CrearOEditarValor(ValorModificado valor)
        {
            if (valor.ID==0)
            {
                await _context.AddRangeAsync(valor);
            }
            if (valor.ID!=0)
            {
                _context.UpdateRange(valor);
            }
        }

        // PUT: api/Contrato/5
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutModificacion([FromRoute] int id, [FromBody] Modificacion modificacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != modificacion.ID)
            {
                return BadRequest();
            }

            _context.Entry(modificacion).State = EntityState.Modified;

            try
            {
                await CrearOEditarValor(modificacion.valorModificado);
                await CrearOEditarFecha(modificacion.fechaModificado);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModificacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return Ok(modificacion);
        }*/

        // PUT: api/Modificacion/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModificacion([FromRoute] int id, [FromBody] Modificacion modificacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != modificacion.ID)
            {
                return BadRequest();
            }

            _context.Entry(modificacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModificacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(modificacion);
        }

        // POST: api/Modificacion
        [HttpPost]
        public async Task<IActionResult> PostModificacion([FromBody] Modificacion modificacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Modificaciones.Add(modificacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetModificacion", new { id = modificacion.ID }, modificacion);
        }

        // DELETE: api/Modificacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModificacion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var modificacion = await _context.AC_Modificaciones.FindAsync(id);
            if (modificacion == null)
            {
                return NotFound();
            }

            _context.AC_Modificaciones.Remove(modificacion);
            await _context.SaveChangesAsync();

            return Ok(modificacion);
        }

        private bool ModificacionExists(int id)
        {
            return _context.AC_Modificaciones.Any(e => e.ID == id);
        }
    }
}
