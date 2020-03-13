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
    public class InformeViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public InformeViewController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Informe_View> GetInformeView([FromRoute] int id)
        {
            return _context.SG_InformeViews.Where(c => c.contratoID == id);
        }
    }
}