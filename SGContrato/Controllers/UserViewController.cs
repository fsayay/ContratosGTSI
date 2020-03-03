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
    public class UserViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public UserViewController(MyDBContext context)
        {
            _context = context;
        }

        // GET: api/Multa
        [HttpGet]
        public IEnumerable<UserRol_View> GetUserView()
        {
            return _context.SG_UsuariosViews;
        }

        // GET: api/UserView/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserView([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            UserRol_View usuario;

            usuario = await _context.SG_UsuariosViews.SingleOrDefaultAsync(c => c.ID == id);

            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }
    }
}

