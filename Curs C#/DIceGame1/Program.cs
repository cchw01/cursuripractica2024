// See https://aka.ms/new-console-template for more information
using DIceGame1.DataLayer;
using DIceGame1.Game;
using DIceGame1.PlayerSpace;

PlayerDataOps playerDataOps = new PlayerDataOps();

List<Player> players = new List<Player>();
Console.WriteLine("Introduceti nr de jucatori");
int nbOfPlayers = Convert.ToInt32(Console.ReadLine());

for(int i=0; i<nbOfPlayers; i++)
{
	Console.WriteLine("Introduceti numele jucatorului " + (i + 1) + ":");
	string playerName = Console.ReadLine();
	Player newPlayer = playerDataOps.GetPlayerByName(playerName);
	if(newPlayer == null )
	{
		newPlayer = new Player(playerName);
		playerDataOps.AddPlayer(newPlayer);
	}
	players.Add(newPlayer);
}
IGame game = new MyDiceGame(players);
Player winner = game.PlayGame();
winner.AddWins();
playerDataOps.UpdatePlayer(winner);
Console.WriteLine("The winner is "+winner.Name);