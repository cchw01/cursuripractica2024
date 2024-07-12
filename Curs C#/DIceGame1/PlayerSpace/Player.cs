using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIceGame1.PlayerSpace
{
	public class Player
	{
        public int PlayerID { get; set; }
        public string Name { get; private set; }
        public int Wins { get; private set; }

        public Player(string name, int wins=0)
        {
            this.Name = name;
            this.Wins = wins;
        }
        public void AddWins()
        {

            this.Wins++;
        }

    }
}
