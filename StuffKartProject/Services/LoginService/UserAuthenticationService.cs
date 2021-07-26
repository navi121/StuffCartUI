using StuffKartProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StuffKartProject.Services.LoginService
{
    public class UserAuthenticationService
    {
        private readonly StuffKartContext _authenticationService;
        private StuffKartContext _signin;

        public UserAuthenticationService()
        {
            StuffKartContext signin;
            //_signin = signin;
        }

        
        public bool ValidateUser(UserDetail loginRequest)
        {
            return _signin.UserDetails.Where(m => m.Email == loginRequest.Email && m.Password == loginRequest.Password).FirstOrDefault() != null;
        }
    }
}
