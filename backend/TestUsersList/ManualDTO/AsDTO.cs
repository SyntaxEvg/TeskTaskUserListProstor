using app.DAL.Entity;
using TestUsersList.Model;

namespace TestUsersList.ManualDTO
{
    public static class AsDTOExtension
    {
        public static UserDTO AsDTO(this User user)
        {
            return new UserDTO
            {
                id = user.id,
                name = user.name,
                surname = user.surname
            };
        }
        public static User ToDAL(this UserDTO user)
        {
            return new User
            {
                name = user.name,
                surname = user.surname,
                id = user.id
            };
        }
    }
}
