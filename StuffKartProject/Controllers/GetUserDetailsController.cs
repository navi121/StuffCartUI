using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StuffKartProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StuffKartProject.Controllers
{
    [Route("GetUserDetails")]
    [ApiController]
    public class GetUserDetailsController : ControllerBase
    {
        private readonly StuffKartContext _context;
        private readonly StuffKartContext _signin;

        public object Session { get; private set; }

        public GetUserDetailsController(StuffKartContext context)
        {
            _context = context;
            _signin = context;
        }
       
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDetail>> GetUserDetail(long id)
        {
            var userDetail = await _context.UserDetails.FindAsync(id);

            if (userDetail == null)
            {
                return NotFound();
            }

            return userDetail;
        }

    }
}
