using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using TestUsersList.Model;
using TestUsersList.Services;

namespace TestUsersList.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {

        private readonly ILogger<UsersController> _logger;
        private readonly IUsersService _usersService;

        public UsersController(ILogger<UsersController> logger, IUsersService usersService )
        {
            _logger = logger;
            _usersService = usersService;
        }

        [HttpGet("read")]
        public async Task<IActionResult> Read()
        {
            var res = await _usersService.Read();
            return Ok(res);
            //return NotFound();
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create(UserDTO userDTO)
        {
            var res = await _usersService.Create(userDTO);
            if (true)
            {
                return Ok(true);
            }
            return Ok(false);
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(UserDTO userDTO)
        {
            var res = await _usersService.Update(userDTO);
            if (true)
            {
                return Ok(true);
            }
            return Ok(false);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("delete")]
        public async Task<IActionResult> Delete([FromQuery] Guid id)
        {
            var res = await _usersService.Delete(id);
            if (res)
            {
                return Ok(true);
            }
            return Ok(false);
        }
    }
}