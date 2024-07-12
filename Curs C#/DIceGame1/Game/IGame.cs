using DIceGame1.PlayerSpace;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIceGame1.Game
{
	public interface IGame
	{
		List<Player> PlayerList { get; set; }
		Player PlayGame();
	}
}
