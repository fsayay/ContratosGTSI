using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SGContrato.Models;

namespace SGContrato.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultaViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public MultaViewController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Multa_View> GetMultaView([FromRoute] int id)
        {
            return _context.SG_MultaViews.Where(c => c.contratoID == id);
        }
    }
}