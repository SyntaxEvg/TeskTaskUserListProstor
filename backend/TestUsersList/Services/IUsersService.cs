using TestUsersList.Model;

namespace TestUsersList.Services
{
    public interface IUsersService
    {
        Task<bool> Create(UserDTO userDTO);
        Task<bool> Delete(Guid id);
        Task<IEnumerable<UserDTO>> Read();
        Task<bool> Update(UserDTO userDTO);
    }
}