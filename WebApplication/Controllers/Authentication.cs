using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApplication.DTO;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Authentication : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public Authentication(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        
        [HttpPost("login")]
        public IActionResult Login([FromForm] LoginDTO credentials)
        {
            return Ok();
        }
        
        [HttpPost("register")]
        public IActionResult Register([FromForm] RegisterDTO credentials)
        {
            return Ok();
        }
    }
}