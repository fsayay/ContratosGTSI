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
    public class GarantiaViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public GarantiaViewController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Garantia_View> GetGarantiaView([FromRoute] int id)
        {
            return _context.SG_GarantiaViews.Where(c => c.contratoID == id);
        }
    }
}