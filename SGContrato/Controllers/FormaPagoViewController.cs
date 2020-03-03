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
    public class FormaPagoViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public FormaPagoViewController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<FormaPago_View> GetFormaPagoView([FromRoute] int id)
        {
            return _context.SG_FormaPagoViews.Where(c => c.contratoID == id);
        }
    }
}