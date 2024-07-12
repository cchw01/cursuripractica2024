using DIceGame1.PlayerSpace;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIceGame1.Game
{
	internal class MyDiceGame : IGame
	{
		public List<Player> PlayerList { get ; set; }
		const int nbOfDices = 2;
		private readonly List<Dice> DiceList;
		private readonly Dictionary<Player,int> results;

        public MyDiceGame(List<Player> players)
        {
             PlayerList = players;
			results = new Dictionary<Player,int>();
			foreach (Player player in PlayerList) { 
				results.Add(player, 0);
			}
			DiceList = new List<Dice>();
			for (int i = 0; i < nbOfDices; i++)
			{
				DiceList.Add(new Dice(6));
			}
        }

        public Player PlayGame()
		{
			int maxValue = 0;
			while (results.Count(x => x.Value == maxValue) > 1)
			{
				foreach (Player player in PlayerList)
				{
					int sum = 0;
					foreach (Dice dice in DiceList)
					{
						int rolled = dice.RollTheDice();
						Console.WriteLine(player.Name + " rolled " + rolled);
						sum += rolled;
					}
					Console.WriteLine(player.Name + "sum is " + sum);
					results[player] = sum;
				}
				maxValue = results.Max(x => x.Value);
			}
			return results.SingleOrDefault(x=>x.Value == maxValue).Key;
		}
	}
}
