using app.DAL.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Reflection.Emit;

namespace App.DAL
{
    public class DataContext : DbContext
    {
        public virtual DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> opt) : base(opt)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder model)
        {

            base.OnModelCreating(model);
        }
        
    }
}