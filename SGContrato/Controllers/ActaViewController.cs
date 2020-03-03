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
    public class ActaViewController : ControllerBase
    {
        private readonly MyDBContext _context;

        public ActaViewController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Acta_View> GetActaView([FromRoute] int id)
        {
            return _context.SG_ActaViews.Where(c=>c.contratoID==id);
        }        
    }
}