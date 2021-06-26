using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication.DTO;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Authentication : ControllerBase
    {
        private readonly ILogger<Authentication> _logger;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public Authentication(ILogger<Authentication> logger, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO credentials)
        {
            var user = await _userManager.FindByNameAsync(credentials.UserName);
            if (user == null)
                return Unauthorized(new {message = "User does not exist"});
            var result = await _signInManager.PasswordSignInAsync(user, credentials.Password, false, false);
            if (!result.Succeeded)
                return Unauthorized(new {message = "Invalid password"});
            return Ok();
        }
        
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO credentials)
        {
            if (await _userManager.FindByNameAsync(credentials.UserName) != null)
                return Unauthorized(new {message = "User already exists"});
            var user = new IdentityUser
            {
                UserName = credentials.UserName,
            };
            var result = await _userManager.CreateAsync(user, credentials.Password);
            if (result.Succeeded)
                return Ok();
            return Unauthorized(result.Errors);
        }
    }
}