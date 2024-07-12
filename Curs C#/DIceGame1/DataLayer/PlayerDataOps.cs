using DIceGame1.DiceDBContext;
using DIceGame1.PlayerSpace;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIceGame1.DataLayer
{
	public class PlayerDataOps
	{
		private readonly DiceDBContextClass dataContext;
        public PlayerDataOps()
        {
            dataContext = new DiceDBContextClass();
        }

        public Player[] GetPlayers()
        {
            return dataContext.Players.ToArray();
        }
        public Player GetPlayerByName(string name)
        {
            return dataContext.Players.FirstOrDefault(x => x.Name == name);
        }
        public void AddPlayer(Player newPlayer)
        {
            try
            {
                dataContext.Players.Add(newPlayer);
                dataContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception in AddPlayer " + ex.Message);
            }
        }
		public void RemovePlayer(Player newPlayer)
		{
			try
			{
				dataContext.Players.Remove(newPlayer);
				dataContext.SaveChanges();
			}
			catch (Exception ex)
			{
				Console.WriteLine("Exception in RemovePlayer " + ex.Message);
			}
		}

		public void UpdatePlayer(Player newPlayer)
		{
			try
			{
				dataContext.Players.Update(newPlayer);
				dataContext.SaveChanges();
			}
			catch (Exception ex)
			{
				Console.WriteLine("Exception in UpdatePlayer " + ex.Message);
			}
		}
	}
}
