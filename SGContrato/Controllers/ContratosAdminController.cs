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
    public class ContratosAdminController : ControllerBase
    {
        private readonly MyDBContext _context;

        public ContratosAdminController(MyDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Contrato> GetContratosAdmin([FromRoute] int id)
        {
            return _context.AC_Contratos.Where(c => c.userID == id);
        }

    }
}