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
    public class SeccionController : ControllerBase
    {
        private readonly MyDBContext _context;

        public SeccionController(MyDBContext context)
        {
            _context = context;
        }

        // GET: api/Seccion
        [HttpGet]
        public IEnumerable<Seccion> GetSeccion()
        {
            return _context.AC_Secciones.Include(x=>x.tipos);
        }

        // GET: api/Seccion/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSeccion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Seccion seccion;

            seccion = await _context.AC_Secciones.Include(t => t.tipos).SingleOrDefaultAsync(c => c.seccionID == id);

            //seccion = await _context.AC_Secciones.Include(t => t.tipos).SingleOrDefaultAsync(c => c.seccionID == id);

            if (seccion == null)
            {
                return NotFound();
            }

            return Ok(seccion);
        }
        
        // PUT: api/Seccion/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSeccion([FromRoute] int id, [FromBody] Seccion seccion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != seccion.seccionID)
            {
                return BadRequest();
            }

            _context.Entry(seccion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SeccionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(seccion);
        }

        // POST: api/Seccion
        [HttpPost]
        public async Task<IActionResult> PostSeccion([FromBody] Seccion seccion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_Secciones.Add(seccion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSeccion", new { id = seccion.seccionID }, seccion);
        }

        // DELETE: api/Seccion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSeccion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var seccion = await _context.AC_Secciones.FindAsync(id);
            if (seccion == null)
            {
                return NotFound();
            }

            _context.AC_Secciones.Remove(seccion);
            await _context.SaveChangesAsync();

            return Ok(seccion);
        }

        private bool SeccionExists(int id)
        {
            return _context.AC_Secciones.Any(e => e.seccionID == id);
        }
    }
}