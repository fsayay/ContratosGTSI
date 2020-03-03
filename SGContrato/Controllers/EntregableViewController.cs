using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SGContrato.Models;

namespace SGContrato.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntregableViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public EntregableViewController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Entregable_View> GetEntregableView([FromRoute] int id)
        {
            return _context.SG_EntregableViews.Where(c => c.contratoID == id);
        }
    }
}