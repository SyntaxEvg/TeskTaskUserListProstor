using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace app.DAL.Repository
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetByIdAsync(Guid EmployeeID);
        Task<bool> CreateAsync(T employee);
        Task<bool> UpdateAsync(T employee);
        Task<bool> DeleteAsync(Guid EmployeeID);
        Task<int> Save();
    }
}
