

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace app.DAL.Entity
{
    public class User : EntityBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]

        public override Guid id { get; set; }
        public override bool Active { get; set; } = true;
        [Required]
        [MaxLength(50)]
        public string name { get; set; }
        [Required]
        [MaxLength(50)]
        public string surname { get; set; }
    }
}