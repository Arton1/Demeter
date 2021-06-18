using Microsoft.EntityFrameworkCore;

namespace Project.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        
        public ApplicationDbContext(DbContextOptions options): base(options) {}
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(new Product[]
            {
                new Product {Id = 1, Name = "Keczup"},
                new Product {Id = 2, Name = "Banany"},
                new Product {Id = 3, Name = "Chleb"}
            });
        }
    }
}