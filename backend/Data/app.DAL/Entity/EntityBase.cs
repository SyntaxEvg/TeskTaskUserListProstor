using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace app.DAL
{
    public abstract class EntityBase
    {
        public abstract Guid id { get; set; }
        public abstract bool Active { get; set; }

    }
}
