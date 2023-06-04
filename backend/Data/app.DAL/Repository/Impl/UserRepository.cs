using app.DAL.Entity;
using App.DAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace app.DAL.Repository.Impl
{
    public class UserRepository : IRepository<User>
    {
        private readonly DataContext dataContext;

        public UserRepository(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public async Task<bool> CreateAsync(User user)
        {
            try
            {
                var entity = await dataContext.Users.FirstOrDefaultAsync(x => x.id == user.id);
                if (entity == null)
                {
                    await dataContext.Users.AddAsync(user);
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                return false;
            }
           
            
        }

      

        public async Task<IEnumerable<User>> GetAll()
        {
            return await dataContext.Users.AsNoTracking().ToListAsync();
        }



        public async Task<User> GetByIdAsync(Guid id)
        {
            return await dataContext.Users.FirstOrDefaultAsync(x => x.id == id);
            
        }

        public async Task<int> Save()
        {
           return await dataContext.SaveChangesAsync();
        }

        public async Task<bool> UpdateAsync(User user)
        {
            var entity = await dataContext.Users.FirstOrDefaultAsync(x => x.id == user.id);
            if (entity is not null)
            {
                entity.name = user.name;
                entity.surname = user.surname;

                dataContext.Users.Update(entity);
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var entity = await dataContext.Users.FirstOrDefaultAsync(x => x.id == id);
            if (entity is not null)
            {
                dataContext.Users.Remove(entity);
                return true;
            }
            return false;
        }
    }
}
