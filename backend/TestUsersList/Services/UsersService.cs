using app.DAL.Repository.Impl;
using Microsoft.EntityFrameworkCore.Diagnostics;
using TestUsersList.ManualDTO;
using TestUsersList.Model;

namespace TestUsersList.Services
{


    public class UsersService : IUsersService
    {
        private readonly UserRepository userRepository;

        //crud
        public UsersService(UserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        public async Task<IEnumerable<UserDTO>> Read()
        {
            var user = await userRepository.GetAll();
            if (user == null)
            {
                return Enumerable.Empty<UserDTO>();
            }
            return user.Select(x => x.AsDTO());

        }
        public async Task<bool> Create(UserDTO userDTO)
        {
            var res = await userRepository.CreateAsync(userDTO.ToDAL());
            return await SaveChanges();
            //return res;
        }
        public async Task<bool> Update(UserDTO userDTO)
        {
            var res = await userRepository.UpdateAsync(userDTO.ToDAL());
            if (!res)
            {
                return false;
            }
            return await SaveChanges();
        }
        public async Task<bool> Delete(Guid id)
        {
           var res =await userRepository.DeleteAsync(id);
            if (!res)
            {
                return false;
            }
            return await SaveChanges();
        }
        
        async Task<bool> SaveChanges()
        {
            try
            {
                await userRepository.Save();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
          
        }
    }
}

