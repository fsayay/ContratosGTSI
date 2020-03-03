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
    public class FechaModificarController : ControllerBase
    {
        private readonly MyDBContext _context;

        public FechaModificarController(MyDBContext context)
        {
            _context = context;
        }

        // GET: api/FechaModificar
        [HttpGet]
        public IEnumerable<FechaModificado> GetFechaModificar()
        {
            return _context.AC_FechaModificado;
        }

        // GET: api/FechaModificar/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFechaModificar([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FechaModificado fechaModificar;

            fechaModificar = await _context.AC_FechaModificado.SingleOrDefaultAsync(c => c.modificacionID == id);

            if (fechaModificar == null)
            {
                return NotFound();
            }

            return Ok(fechaModificar);
        }

        // PUT: api/FechaModificar/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFechaModificar([FromRoute] int id, [FromBody] FechaModificado fechaModificar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fechaModificar.ID)
            {
                return BadRequest();
            }

            _context.Entry(fechaModificar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FechaModificarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(fechaModificar);
        }

        // POST: api/FechaModificar
        [HttpPost]
        public async Task<IActionResult> PostFechaModificar([FromBody] FechaModificado fechaModificar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_FechaModificado.Add(fechaModificar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFechaModificar", new { id = fechaModificar.ID }, fechaModificar);
        }
        
        private bool FechaModificarExists(int id)
        {
            return _context.AC_FechaModificado.Any(e => e.ID == id);
        }
    }
}