using System;
using System.Linq;
using System.Collections.Generic;
using BasicRestAPIServer.Entities;

namespace BasicRestAPIServer.Repositories
{
    public class InMemPlayersRepository : IPlayersRepository
    {
        private readonly List<Player> players = new()
        {
            new Player { Name = "Montferrat" },
            new Player { Name = "Mao" },
            new Player { Name = "Metrarkius" }
        };

        public IEnumerable<Player> GetPlayers()
        {
            return players;
        }

        public Player GetPlayer(Guid id)
        {
            return players.Where(player => player.Id == id).SingleOrDefault();
        }

        public void CreatePlayer(Player player)
        {
            players.Add(player);
        }
    }
}