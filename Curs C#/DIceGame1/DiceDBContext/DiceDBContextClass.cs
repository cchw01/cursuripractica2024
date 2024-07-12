using DIceGame1.PlayerSpace;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIceGame1.DiceDBContext
{
	public class DiceDBContextClass:DbContext
	{
        public DbSet<Player> Players { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(
				@"Server=(localdb)\mssqllocaldb;Database=DiceGame1;Trusted_Connection=True;MultipleActiveResultSets=true");
		}
	}
}
