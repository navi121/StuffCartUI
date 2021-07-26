using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StuffKartProject.Constant;
using StuffKartProject.Models;
using StuffKartProject.Services.LoginService;

namespace StuffKartProject.Controllers
{
    [Route("StuffKart")]
    [ApiController]
    public class UserDetailsController : ControllerBase
    {
        private readonly StuffKartContext _context;
        private readonly StuffKartContext _authenticationService;
        //public UserDetailsController(UserAuthenticationService authenticationService)
        //{
        //    _authenticationService = authenticationService;
        //}

        public object Session { get; private set; }

        public UserDetailsController(StuffKartContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDetail>>> GetUserDetails()
        {
            return await _context.UserDetails.ToListAsync();
        }




        [HttpPost]
        public async Task<ActionResult<UserDetail>> PostUserDetail(UserDetail userDetail)
        {

            _context.UserDetails.Add(userDetail);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserDetailExists(userDetail.MobileNumber))
                {
                    return BadRequest(Messages.InvalidMobileNumber);
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(200);
        }


        [HttpPost("Login")]
        public ActionResult<UserDetail> Login(UserDetail loginRequest)
        {
            try
            {
                //UserAuthenticationService _authenticationService = new UserAuthenticationService();
                //bool loginStatus = _authenticationService.ValidateUser(loginRequest);
                var loginStatus = _context.UserDetails.Where(m => m.Email == loginRequest.Email && m.Password == loginRequest.Password).FirstOrDefault() != null;
                if (loginStatus == false)
                {
                    return BadRequest(Messages.InvalidDetails);
                }

                return StatusCode(200);
            }
            catch
            {
                return BadRequest(Messages.InvalidDetails);
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserDetail(long Id)
        {
            var userDetail = await _context.UserDetails.FindAsync(Id);
            if (userDetail == null)
            {
                return NotFound();
            }

            _context.UserDetails.Remove(userDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserDetailExists(long id)
        {
            return _context.UserDetails.Any(e => e.MobileNumber == id);
        }
    }
}


/*var userEmail = await _signin.UserDetails.FindAsync(Login.Email);
var userDetails = await _signin.UserDetails.FindAsync(Login.Password);
if (userEmail == null && userDetails==null)
{
    return NotFound();
}


return userDetails;*/
