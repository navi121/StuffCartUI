using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StuffKartProject.Models;

namespace StuffKartProject.Controllers
{
    [Route("CartDetails")]
    [ApiController]
    public class CartDetailsController : ControllerBase
    {
        private readonly StuffKartContext _context;

        public CartDetailsController(StuffKartContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartDetail>>> GetCartDetails()
        {
            return await _context.CartDetails.ToListAsync();
        }

        

     
        [HttpPost]
        public async Task<ActionResult<CartDetail>> PostCartDetail(CartDetail cartDetail)
        {
            _context.CartDetails.Add(cartDetail);
            await _context.SaveChangesAsync();

            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCartDetail(int id)
        {
            var cartDetail = await _context.CartDetails.FindAsync(id);
            if (cartDetail == null)
            {
                return NotFound();
            }

            _context.CartDetails.Remove(cartDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
