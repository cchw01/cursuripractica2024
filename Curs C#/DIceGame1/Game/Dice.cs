using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIceGame1.Game
{
	public class Dice
	{
		private readonly int nbOfFaces;
        public Dice(int number)
        {
            nbOfFaces = number;
        }
        public int RollTheDice()
        {
            Random rnd = new Random();
            return rnd.Next(1,nbOfFaces+1);
        }
    }
}
