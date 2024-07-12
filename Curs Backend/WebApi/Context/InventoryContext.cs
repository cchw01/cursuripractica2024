using Microsoft.EntityFrameworkCore;
using Inventory.Models;

namespace Inventory.Context
{
    public class InventoryContext : DbContext
    {
        public DbSet<InventoryItem> InventoryItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb; database=Inventory; Trusted_Connection=True;");
        }
    }
}
