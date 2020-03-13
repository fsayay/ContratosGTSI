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
    public class ValorModificarController : ControllerBase
    {
        private readonly MyDBContext _context;

        public ValorModificarController(MyDBContext context)
        {
            _context = context;
        }

        // GET: api/ValorModificar
        [HttpGet]
        public IEnumerable<ValorModificado> GetValorModificar()
        {
            return _context.AC_ValorModificado;
        }

        // GET: api/ValorModificar/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValorModificar([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ValorModificado valorModificar;

            valorModificar = await _context.AC_ValorModificado.SingleOrDefaultAsync(c => c.modificacionID == id);

            if (valorModificar == null)
            {
                return NotFound();
            }

            return Ok(valorModificar);
        }

        // PUT: api/ValorModificar/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutValorModificar([FromRoute] int id, [FromBody] ValorModificado valorModificar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != valorModificar.ID)
            {
                return BadRequest();
            }

            _context.Entry(valorModificar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ValorModificarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(valorModificar);
        }

        // POST: api/ValorModificar
        [HttpPost]
        public async Task<IActionResult> PostValorModificar([FromBody] ValorModificado valorModificar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AC_ValorModificado.Add(valorModificar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetValorModificar", new { id = valorModificar.ID }, valorModificar);
        }

        private bool ValorModificarExists(int id)
        {
            return _context.AC_ValorModificado.Any(e => e.ID == id);
        }
    }
}